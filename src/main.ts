import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';
import 'dotenv/config';

import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3000;
  const configuredFrontendOrigin = process.env.FRONTEND_ORIGIN;

  app.enableShutdownHooks();
  app.use(json({ limit: '2mb' }));
  app.use(urlencoded({ extended: true, limit: '2mb' }));
  app.enableCors({
    origin: (origin, callback) => {
      if (!origin) {
        callback(null, true);
        return;
      }

      const isConfiguredOrigin = configuredFrontendOrigin
        ? origin === configuredFrontendOrigin
        : false;
      const isLocalhostOrigin =
        /^https?:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin);
      const isPrivateNetworkOrigin =
        /^https?:\/\/(10\.\d+\.\d+\.\d+|192\.168\.\d+\.\d+|172\.(1[6-9]|2\d|3[0-1])\.\d+\.\d+):\d+$/.test(
          origin,
        );

      callback(
        null,
        isConfiguredOrigin || isLocalhostOrigin || isPrivateNetworkOrigin,
      );
    },
    credentials: true,
  });
  app.useGlobalFilters(new GlobalExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(port);
}

void bootstrap();

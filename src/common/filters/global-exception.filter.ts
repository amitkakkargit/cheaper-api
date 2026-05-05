import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();

    const status = this.getStatus(exception);
    const errorResponse =
      exception instanceof HttpException ? exception.getResponse() : undefined;

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: this.getMessage(errorResponse, exception),
    });
  }

  private getMessage(errorResponse: unknown, exception: unknown): unknown {
    if (
      errorResponse &&
      typeof errorResponse === 'object' &&
      'message' in errorResponse
    ) {
      return errorResponse.message;
    }

    if (typeof errorResponse === 'string') {
      return errorResponse;
    }

    if (exception instanceof Error) {
      return exception.message;
    }

    return 'Internal server error';
  }

  private getStatus(exception: unknown): number {
    if (exception instanceof HttpException) {
      return exception.getStatus();
    }

    if (
      exception &&
      typeof exception === 'object' &&
      'status' in exception &&
      typeof exception.status === 'number'
    ) {
      return exception.status;
    }

    if (
      exception &&
      typeof exception === 'object' &&
      'statusCode' in exception &&
      typeof exception.statusCode === 'number'
    ) {
      return exception.statusCode;
    }

    return HttpStatus.INTERNAL_SERVER_ERROR;
  }
}

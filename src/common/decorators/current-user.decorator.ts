import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export type CurrentUser = {
  userId: string;
  email?: string | null;
  phone?: string | null;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext): CurrentUser => {
    const request = context.switchToHttp().getRequest<{ user: CurrentUser }>();

    return request.user;
  },
);

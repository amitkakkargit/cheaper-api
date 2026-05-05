import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { CurrentUser } from '../decorators/current-user.decorator';

@Injectable()
export class OptionalJwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context
      .switchToHttp()
      .getRequest<{ headers: Record<string, string | undefined>; user?: CurrentUser }>();
    const [type, token] = request.headers.authorization?.split(' ') ?? [];

    if (type !== 'Bearer' || !token) {
      return true;
    }

    try {
      const payload = await this.jwtService.verifyAsync<{
        sub: string;
        email?: string | null;
        phone?: string | null;
      }>(token);

      request.user = {
        userId: payload.sub,
        email: payload.email,
        phone: payload.phone,
      };
    } catch {
      request.user = undefined;
    }

    return true;
  }
}

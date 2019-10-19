import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '../../config';
import { AuthService } from '../services/auth.service';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  
  constructor(
    private config: ConfigService,
    private authService: AuthService,
  ) {}

  async use(req, res, next) {
    if (req.headers[this.config.TOKEN_HEADER_NAME]) {
      const payload = await this.authService.tokenVerify(req.headers[this.config.TOKEN_HEADER_NAME]);
      if (payload) {
        req.tokenPayload = payload;
      }
    }
    next();
  }
}

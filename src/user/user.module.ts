import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { logger } from './middlewares/logger.middleware';
import { UserMiddleware } from './middlewares/user.middleware';
import { ConfigModule } from '../config/config.module';
import { AuthService } from './services/auth.service';

@Module({
  imports: [ConfigModule],
  controllers: [UserController],
  providers: [UserService, AuthService],
  exports: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger, UserMiddleware)
      .forRoutes(UserController);
  }
}

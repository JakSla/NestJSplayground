import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { logger } from './middlewares/logger.middleware';
import { UserMiddleware } from './middlewares/user.middleware';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger, UserMiddleware)
      .forRoutes(UserController);
  }
}

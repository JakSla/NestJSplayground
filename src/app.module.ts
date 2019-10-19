import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './comments/comments.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CommentsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

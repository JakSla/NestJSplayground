import { Module } from '@nestjs/common';
import { CommentsController } from './controllers/comments.controller';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  controllers: [CommentsController],
})
export class CommentsModule {}

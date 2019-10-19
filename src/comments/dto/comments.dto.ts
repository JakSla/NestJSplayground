import { CommentModel } from '../models';
import { GetCommentsRequestDto } from './get-comments-req.dto';

export class GetCommentsResponseDto {
  pageIndex: number;
  pageSize: number;
  total: number;
  data: CommentModel[];
  query?: GetCommentsRequestDto;
}

export class GetCommentResponseDto {
  total: number;
  data: CommentModel;
}

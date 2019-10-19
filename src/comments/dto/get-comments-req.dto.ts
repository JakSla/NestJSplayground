import { CommentModel } from '../models';

export class GetCommentsRequestDto {
  search: string;
  pageIndex: number;
  pageSize: number;
  total: number;
  data: CommentModel[];
}

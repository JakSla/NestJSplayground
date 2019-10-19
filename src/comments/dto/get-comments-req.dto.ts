import { CommentModel } from '../models2';

export class GetCommentsRequestDto {
  search: string;
  pageIndex: number;
  pageSize: number;
  total: number;
  data: CommentModel[];
}

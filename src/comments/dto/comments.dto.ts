import { CommentModel } from '../models2';
import { GetCommentsRequestDto } from './get-comments-req.dto';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class GetCommentsResponseDto {
  @ApiModelProperty()
  pageIndex: number;
  @ApiModelProperty()
  pageSize: number;
  @ApiModelProperty()
  total: number;
  @ApiModelProperty({
    type: CommentModel,
    isArray: true,
  })
  data: CommentModel[];
  @ApiModelPropertyOptional()
  query?: GetCommentsRequestDto;
}

export class GetCommentResponseDto {
  total: number;
  data: CommentModel;
}

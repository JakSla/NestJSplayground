import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class CommentModel {
  @ApiModelPropertyOptional()
  id?: number;
  @ApiModelProperty({example: 'Piotr', description: 'string ktory bedzie nazwą'})
  name: string;
}

import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export enum UserRole {
  ADMIN = 'admin',
  ROOT = 'root',
}
export class UserModel {
  @ApiModelPropertyOptional()
  id?: number;

  @ApiModelProperty()
  name: string;

  @ApiModelPropertyOptional()
  email?: string;

  @ApiModelPropertyOptional()
  password?: string;

  @ApiModelPropertyOptional({
    enum: UserRole,
    isArray: true,
  })
  roles?: UserRole[];
}

export class TokenPayloadModel {
  @ApiModelProperty()
  user: UserModel;
}

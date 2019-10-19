import { UserModel } from '../models2';
import { ApiModelProperty } from '@nestjs/swagger';

export class UserRegisterRequestDto {
  @ApiModelProperty({example: 'Piotr'})
  name: string;

  @ApiModelProperty({example: 'piotr@myflow.pl'})
  email: string;

  @ApiModelProperty({example: '123'})
  password: string;
}

export class UserRegisterResponseDto {
  // @ApiModelProperty()
  @ApiModelProperty({type: UserModel})
  user: UserModel;
}
export class UserLoginRequestDto {
  @ApiModelProperty({example: 'piotr@myflow.pl'})
  email: string;
  @ApiModelProperty({example: '123'})
  password: string;
}

export class UserLoginResponseDto {
  @ApiModelProperty()
  token: string;
  @ApiModelProperty()
  user: UserModel;
}

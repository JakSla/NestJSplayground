import { UserModel } from '../models2';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class UserRegisterRequestDto {
  @ApiModelProperty({ example: 'Piotr' })
  name: string;

  @ApiModelProperty({ example: 'piotr@myflow.pl' })
  email: string;

  @ApiModelProperty({ example: '123' })
  password: string;
}

export class UserRegisterResponseDto {
  // @ApiModelProperty()
  @ApiModelProperty({ type: UserModel })
  user: UserModel;
}
export class UserLoginRequestDto {

  @IsEmail()
  @ApiModelProperty({ example: 'piotr@myflow.pl' })
  email: string;

  @IsString({})
  @MinLength(3)
  @ApiModelProperty({ example: '123' })
  password: string;
}

export class UserLoginResponseDto {
  @ApiModelProperty()
  token: string;
  @ApiModelProperty()
  user: UserModel;
}

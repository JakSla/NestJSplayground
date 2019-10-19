import { Controller, Post, Body, Get, Request } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { UserRegisterResponseDto, UserRegisterRequestDto } from '../dto';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
  ) { }

  @Post('register')

  @ApiCreatedResponse({type: UserRegisterResponseDto})
  async register(@Body() data: UserRegisterRequestDto): Promise<UserRegisterResponseDto> {
    const user = await this.userService.create(data);
    // TODO handle errors
    return {
      user,
    };
  }

  @Get()
  getUser(@Request() req) {
    return req.tokenPayload;
  }
}

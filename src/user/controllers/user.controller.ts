import { Controller, Post, Body, Get, Request, UseGuards } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { UserRegisterResponseDto, UserRegisterRequestDto } from '../dto';
import { User } from '../decorators/user.decorator';
import { Roles } from '../decorators/roles.decorator';
import { UserRole, UserModel } from '../models2';
import { AuthGuard } from '../guards/auth.guard';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
  ) { }

  @Post('register')

  @ApiCreatedResponse({ type: UserRegisterResponseDto })
  async register(@Body() data: UserRegisterRequestDto): Promise<UserRegisterResponseDto> {
    const user = await this.userService.create(data);
    // TODO handle errors
    return {
      user,
    };
  }

  @Get()
  @UseGuards(AuthGuard)
  @Roles(UserRole.ROOT)
  getUser(@User() user: UserModel) {
    return {
      user,
    };
  }
}

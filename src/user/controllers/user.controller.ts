import { Controller, Post, Body, Get, Request, UseGuards, HttpException, HttpStatus, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { ApiCreatedResponse, ApiBearerAuth } from '@nestjs/swagger';
import { UserRegisterResponseDto, UserRegisterRequestDto, UserLoginRequestDto, UserLoginResponseDto } from '../dto';
import { User } from '../decorators/user.decorator';
import { Roles } from '../decorators/roles.decorator';
import { UserRole, UserModel } from '../models2';
import { AuthGuard } from '../guards/auth.guard';
import { AuthService } from '../services/auth.service';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) { }

  @UsePipes(new ValidationPipe({ transform: true }))
  @Post('login')
  async login(@Body() credentials: UserLoginRequestDto): Promise<UserLoginResponseDto> {

    const user = await this.userService.findByCredentials(credentials.email, credentials.password);

    if (!user) {
      throw new HttpException('ValidationError', HttpStatus.UNPROCESSABLE_ENTITY);
    }

    return {
      token: await this.authService.tokenSign({ user }),
      user,
    };
  }

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
  // @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  getUser(@User() user: UserModel) {
    return {
      user,
    };
  }
}

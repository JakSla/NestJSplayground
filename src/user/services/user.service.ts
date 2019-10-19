import { Injectable } from '@nestjs/common';
import { UserModel } from '../models2';
import { UserRegisterRequestDto } from '../dto';

@Injectable()
export class UserService {
  users: UserModel[] = [];

  async create(data: UserRegisterRequestDto): Promise<UserModel> {
    const user: UserModel = {
      id: this.users.length + 1,
      email: data.email,
      name: data.name,
      password: data.password,
      roles: [],
    };
    this.users.push(user);
    return user;
  }
}

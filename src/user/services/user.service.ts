import { Injectable } from '@nestjs/common';
import { UserModel, UserRole } from '../models2';
import { UserRegisterRequestDto } from '../dto';

@Injectable()
export class UserService {

  // dodajemy testowego usera
  users: UserModel[] = [{
    id: 1,
    name: 'Piotr',
    email: 'piotr@myflow.pl',
    password: '123',
    roles: [UserRole.ADMIN],
  }];

  async findByCredentials(email: string, password: string): Promise<UserModel> {
    return this.users.find(user => user.email === email && user.password === password);
  }

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

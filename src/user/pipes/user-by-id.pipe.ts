import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException, NotFoundException } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserModel } from '../models2';

@Injectable()
export class UserByIdPipe implements PipeTransform {

  constructor(private userService: UserService) {}

  async transform(value: any, metadata: ArgumentMetadata): Promise<UserModel> {

    const id = parseInt(value, 10);

    if (!id) {
      throw new BadRequestException('Id param validation failed');
    }
    const user = await this.userService.getById(id);
    if (!user) {
      throw new NotFoundException(`User for id ${id} not found`);
    }
    return user;
  }
}

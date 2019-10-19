import { createParamDecorator } from '@nestjs/common';
import { UserModel } from '../models2';

export const User = createParamDecorator((data, req): UserModel => {
  return (req.tokenPayload && req.tokenPayload.user) ? req.tokenPayload.user : undefined;
});

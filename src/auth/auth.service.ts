import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AuthDto } from './dto';
const users = require('../users.json');
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  signinLocal(dto: AuthDto) {
    const user = users.find((_user) => _user.email === dto.email);
    if (!user) {
      throw new UnauthorizedException('Credential incorrect!');
    }
    if (user.password !== dto.password) {
      throw new UnauthorizedException('Credentials incorrect');
    }
    return user;
  }

  signupLocal(dto: AuthDto) {}

  signUser(userId: number, email: string, type: string) {}
}

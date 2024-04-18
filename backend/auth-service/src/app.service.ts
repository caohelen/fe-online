import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export interface LoginVo {
  username: string;
  password: string;
}

export interface tokenVo {
  token: string;
}

@Injectable()
export class AppService {
  constructor(private readonly jwt: JwtService) {}

  sign(vo: LoginVo): string {
    return this.jwt.sign(JSON.stringify(vo));
  }
  getInfo(token: tokenVo): LoginVo {
    return this.jwt.decode(token.token);
  }
}

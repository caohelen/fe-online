import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AppService, LoginVo, tokenVo } from './app.service';
import fetch from 'node-fetch';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/login')
  @HttpCode(200)
  async login(@Body() vo: LoginVo) {
    // console.log(this.appService.getInfo({ token: this.appService.sign(vo) }));
    const response = await fetch('http://localhost:5001/info', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: this.appService.sign(vo) }),
    });
    const data = await response.json();
    data.token = this.appService.sign(vo);
    return { success: true, data: data };
    // .catch((error) => console.error('发生错误:', error));
  }

  @Post('/info')
  @HttpCode(200)
  getInfo(@Body() token: tokenVo): LoginVo {
    return this.appService.getInfo(token);
  }
}

import { Controller, Body, Post, UseGuards, Request } from '@nestjs/common';
import { UserCreateDto } from '../users/DTO/user.create.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from '../../conf/core/guards/local-auth.guard';
import { DoesUserExist } from '../../conf/core/guards/doesUserExist.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }

  @UseGuards(DoesUserExist)
  @Post('signup')
  async signUp(@Body() user: UserCreateDto) {
    return await this.authService.create(user);
  }
}

import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'nome', // Use o nome do campo que contém o nome do usuário
      passwordField: 'cpf', // Use o nome do campo que contém o CPF do usuário
    });
  }

  async validate(nome: string, cpf: string): Promise<any> {
    const user = await this.authService.validateUser(nome, cpf);
    if (!user) {
      throw new UnauthorizedException('Invalid user credentials');
    }
    return user;
  }
}

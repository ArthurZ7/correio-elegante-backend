import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserGenerateToken } from './interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(nome: string, cpf: string) {
    const user = await this.userService.findOneByCpf(cpf);
    if (!user) {
      return null;
    }
    const match = nome === user.nome;
    if (!match) {
      return null;
    }
    const result = user['dataValues'];
    return result;
  }
  public async login(user: any) {
    const token = await this.generateToken({ id: user.id });
    return { user, token };
  }
  public async create(user: any) {
    const newUser = await this.userService.create(user);
    const result = newUser['dataValues'];

    // generate token
    const token = await this.generateToken({ id: result.id });

    // return the user and the token
    return { token };
  }

  private async generateToken(user: UserGenerateToken) {
    const token = await this.jwtService.signAsync(user);
    await this.userService.saveToken(user.id, token);
    return token;
  }
}

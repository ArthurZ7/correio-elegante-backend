import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(nome: string, cpf: string, idade: number) {
    // find if user exist with this email
    const user = await this.userService.findOneByCpf(cpf);
    if (!user) {
      return null;
    }

    // find if user password match
    const match = nome === user.nome && idade === user.idade;
    if (!match) {
      return null;
    }

    // tslint:disable-next-line: no-string-literal
    const result = user['dataValues'];
    return result;
  }
  public async login(user: any) {
    const token = await this.generateToken(user);
    return { user, token };
  }
  public async create(user: any) {
    // hash the password

    // create the user
    const newUser = await this.userService.create(user);

    // tslint:disable-next-line: no-string-literal
    const result = newUser['dataValues'];

    // generate token
    const token = await this.generateToken(result);

    // return the user and the token
    return { user: result, token };
  }

  private async generateToken(user: any) {
    const token = await this.jwtService.sign(user);
    return token;
  }
}

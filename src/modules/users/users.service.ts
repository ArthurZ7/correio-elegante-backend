import { Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { USERS_REPOSITORY } from 'src/conf/constants';
import { Users } from 'src/dataBase/models/users/users.models';
import { UserBioDto } from './DTO/user.bio.dto';
import { UserCreateDto } from './DTO/user.create.dto';
import { UsersDto } from './DTO/users.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY) private readonly userRepository: typeof Users,
  ) {}

  async create(user: UserCreateDto): Promise<Users> {
    return await this.userRepository.create<Users>(user);
  }

  async findOneByCpf(cpf: string): Promise<Users> {
    return await this.userRepository.findOne<Users>({ where: { cpf } });
  }

  async findOneById(id: number): Promise<Users> {
    return await this.userRepository.findOne<Users>({ where: { id } });
  }
  async saveToken(id: number, token: string): Promise<any> {
    await this.userRepository.update({ token }, { where: { id: id } });
  }
  async buscaUsuarioExists(
    cpf: string,
    nome: string,
    telefone: number,
  ): Promise<Users> {
    return await this.userRepository.findOne<Users>({
      where: { [Op.and]: [{ cpf }, { nome }, { telefone }] },
    });
  }
  async findOneByPublicId(public_id: string) {
    return await this.userRepository.findOne<Users>({ where: { public_id } });
  }
  async findAll() {
    return await this.userRepository.findAll<Users>();
  }
  async updateBio(bio: UserBioDto, id: any) {
    return await this.userRepository.update(
      { bio: bio.bio },
      { where: { id: id } },
    );
  }
}

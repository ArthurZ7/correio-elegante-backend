import { Inject, Injectable } from '@nestjs/common';
import { USERS_REPOSITORY } from 'src/conf/constants';
import { Users } from 'src/dataBase/models/users/users.models';
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
}

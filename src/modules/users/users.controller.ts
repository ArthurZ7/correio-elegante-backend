import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JsonToObjectMapperService } from 'src/conf/core/pipes/mapper/jsonToObjectMapper.service';
import { UsersDto } from './DTO/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly jsonToObjectMapperService: JsonToObjectMapperService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async buscaAll() {
    const users = await this.usersService.findAll();
    return this.jsonToObjectMapperService.mapJsonArrayToClass(users, UsersDto);
  }
}

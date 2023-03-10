import { Controller, Get, Put, UseGuards, Request, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JsonToObjectMapperService } from 'src/conf/core/pipes/mapper/jsonToObjectMapper.service';
import { UserBioDto } from './DTO/user.bio.dto';
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

  @UseGuards(AuthGuard('jwt'))
  @Put('bio')
  async updateBio(@Body() bio: UserBioDto, @Request() req) {
    await this.usersService.updateBio(bio, req.user.id);
    return;
  }
}

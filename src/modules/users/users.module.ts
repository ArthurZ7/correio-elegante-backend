import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { usersProviders } from 'src/dataBase/models/users/user.provider';
import { JsonToObjectMapperModule } from 'src/conf/core/pipes/mapper/jsonToObjectMapper.module';

@Module({
  imports: [JsonToObjectMapperModule],
  providers: [UsersService, ...usersProviders],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}

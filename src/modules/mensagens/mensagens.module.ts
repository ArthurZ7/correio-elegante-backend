import { Module } from '@nestjs/common';
import { MensagensService } from './mensagens.service';
import { MensagensController } from './mensagens.controller';
import { mensagensProviders } from 'src/dataBase/models/mensagens/mensagens.provider';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule],
  providers: [MensagensService, ...mensagensProviders],
  controllers: [MensagensController],
})
export class MensagensModule {}

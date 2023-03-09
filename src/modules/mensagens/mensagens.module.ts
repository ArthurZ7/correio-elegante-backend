import { Module } from '@nestjs/common';
import { MensagensService } from './mensagens.service';
import { MensagensController } from './mensagens.controller';

@Module({
  providers: [MensagensService],
  controllers: [MensagensController],
})
export class MensagensModule {}

import { Module } from '@nestjs/common';
import { JsonToObjectMapperService } from './jsonToObjectMapper.service';

@Module({
  providers: [JsonToObjectMapperService],
  exports: [JsonToObjectMapperService],
})
export class JsonToObjectMapperModule {}

import { Injectable } from '@nestjs/common';
import { plainToClass, Type } from 'class-transformer';

@Injectable()
export class JsonToObjectMapperService {
  mapJsonToClass<T>(json: object, classType: new () => T): T {
    return plainToClass(classType, json['dataValues'], {
      excludeExtraneousValues: true,
    });
  }

  mapJsonArrayToClass<T>(jsonArray: object[], classType: { new (): T }): T[] {
    return jsonArray.map((json) => this.mapJsonToClass(json, classType));
  }
}

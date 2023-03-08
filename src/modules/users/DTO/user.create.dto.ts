import {
  IsNotEmpty,
  IsEnum,
  IsInt,
  MinLength,
  MaxLength,
} from 'class-validator';
import { Sexo } from 'src/conf/core/enum/sexo.enum';
export class UserCreateDto {
  @MaxLength(150)
  @IsNotEmpty()
  readonly nome: string;

  @IsNotEmpty()
  @MinLength(11)
  readonly cpf: string;

  @IsInt()
  readonly telefone: number;

  @IsInt()
  readonly idade: number;

  @IsNotEmpty()
  @IsEnum(Sexo, {
    message: 'Sexo masculino ou feminino',
  })
  readonly sexo: Sexo;
}

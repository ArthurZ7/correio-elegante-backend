import { IsInt, IsNotEmpty, MaxLength } from 'class-validator';
export class MensagemResponseDto {
  @MaxLength(1000)
  @IsNotEmpty()
  readonly mensagem: string;

  @IsNotEmpty()
  readonly remetente: string;
}

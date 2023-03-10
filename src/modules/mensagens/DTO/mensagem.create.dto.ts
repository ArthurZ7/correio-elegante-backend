import { IsInt, IsNotEmpty, MaxLength } from 'class-validator';
export class MensagemCreateDto {
  @MaxLength(1000)
  @IsNotEmpty()
  readonly mensagem: string;

  @IsInt()
  readonly destinatario: number;
}

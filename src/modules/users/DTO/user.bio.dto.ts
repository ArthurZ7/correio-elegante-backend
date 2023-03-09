import { IsNotEmpty, MaxLength } from 'class-validator';
export class UserBioDto {
  @IsNotEmpty()
  @MaxLength(1000)
  readonly bio: string;
}

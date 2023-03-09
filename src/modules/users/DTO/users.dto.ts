import { Expose } from 'class-transformer';
export class UsersDto {
  @Expose() public nome: string;
  @Expose() public idade: number;
  @Expose() public bio: string;
  @Expose() public foto: string;
}

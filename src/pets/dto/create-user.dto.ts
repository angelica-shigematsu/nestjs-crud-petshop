import { IsNotEmpty, IsNumber, Length, Matches } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @Length(5, 30)
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @Matches(/^[0-9]{11}$/)
  cpf: string;

  @IsNotEmpty()
  @Length(5, 50)
  address: string;

  @IsNotEmpty()
  @Length(5, 50)
  city: string;

  @IsNotEmpty()
  @Length(5, 20)
  state: string;

  @IsNotEmpty()
  @Matches(/^[0-9]{11}$/)
  phone: string;

  @IsNotEmpty()
  email: string;
}
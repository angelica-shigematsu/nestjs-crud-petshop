import { IsNotEmpty, IsNumber, Length, Matches } from "class-validator";
import { Pet } from "../entity/Pet";

export class UpdateUserDto {
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
  @Length(11)
  phone: string;

  @IsNotEmpty()
  email: string;

  @IsNumber()
  pets: Pet;
}
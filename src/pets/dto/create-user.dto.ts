import { IsNotEmpty, IsNumber, IsUUID, Length } from "class-validator";
import { Pet } from "../entity/Pet";

export class CreateUserDto {
  @IsUUID()
  id: number;

  @IsNotEmpty()
  @Length(5, 30)
  name: string;

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
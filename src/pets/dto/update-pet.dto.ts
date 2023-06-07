import { IsNotEmpty, IsNumber, IsUUID, Length } from "class-validator";
import { User } from "../entity/User";

export class UpdatePetDto {
  @IsNotEmpty()
  @Length(5, 20)
  name: string;

  @IsNotEmpty()
  @Length(3, 10)
  breed: string;

  @IsNotEmpty()
  birthDate: Date;
  
  @IsNumber()
  userId: User;
}
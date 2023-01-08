import { IsNotEmpty, IsUUID } from 'class-validator';
import { Length } from 'class-validator';

export class CreatePetDto {
  @IsUUID()
  id: number;
  @IsNotEmpty()
  @Length(5, 20)
  name: string;
  @IsNotEmpty()
  @Length(3, 10)
  breed: string;
  @IsNotEmpty()
  birthDate: Date;
}
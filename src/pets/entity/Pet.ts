import { GenreType } from "../types/pets-type.enum";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { MIN } from "class-validator";


@Entity()
export class Pet extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  breed: string;

  @Column()
  birthDate: Date;

  @Column()
  genre: GenreType;
}
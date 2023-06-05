import { GenreType } from "../types/pets-type.enum";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User";

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

  @ManyToOne(() => User, user => user.pets)
  userId: User;
}
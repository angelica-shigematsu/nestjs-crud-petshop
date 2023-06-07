import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn,  } from "typeorm";
import { Pet } from "./Pet";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @OneToMany(() => Pet, pets => pets.userId)
  pets: Pet[];
}
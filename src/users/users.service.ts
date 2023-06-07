import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/pets/dto/create-user.dto';
import { UpdateUserDto } from 'src/pets/dto/update-user.dto';
import { User } from 'src/pets/entity/User';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User)
    private userRepository: Repository<User>) {}

    async createUser(createUserDto: CreateUserDto): Promise<User> {
      const { name, cpf, address, city, state, phone, email } = createUserDto


      const foundEmail = await this.getUserEmail(email);

      if(foundEmail) return null;
      
      const user = new User();
      user.name = name;
      user.cpf = cpf;
      user.address = address;
      user.city = city;
      user.state = state;
      user.phone = phone;
      user.email = email;

      await user.save();
      
      return user;
    }

    async getUserById(id: number): Promise<User> {
      const foundId = await this.userRepository.findOne({
        where: { id: id }
      })

      if(!foundId) throw new NotFoundException(`User ${id} not found`)
    
      return foundId;
    }

    async getUserEmail(email: string): Promise<User> {
      const foundEmail = await this.userRepository.findOne({
        where: { email: email}
      })

      return foundEmail;
    }

    async getAllUsers() {
      const allDataUsers = await this.userRepository.find()

      return allDataUsers
    }

    async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
      const user = await this.getUserById(id)

      const email = updateUserDto.email;

      const foundEmail = await this.getUserEmail(email);

      if(foundEmail && user.id != id) throw new Error(`User with ${email} already registered`);

      user.name = updateUserDto.name;
      user.cpf = updateUserDto.cpf;
      user.address = updateUserDto.address;
      user.city = updateUserDto.city;
      user.state = updateUserDto.state;
      user.phone = updateUserDto.phone;
      user.email = updateUserDto.email;

      await user.save();

      return user;
    }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/pets/dto/create-user.dto';
import { User } from 'src/pets/entity/User';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User)
    private userRepository: Repository<User>) {}

    async createUser(createUserDto: CreateUserDto): Promise<User> {
      const { name, address, city, state, phone, email } = createUserDto

      const user = new User();
      user.name = name;
      user.address = address;
      user.city = city;
      user.state = state;
      user.phone = phone;
      user.email = email;

      await user.save();
      
      return user;
    }
}

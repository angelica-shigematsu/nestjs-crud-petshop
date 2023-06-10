import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '../pets/dto/create-user.dto';
import { User } from '../pets/entity/User';
import { UpdateUserDto } from '../pets/dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.createUser(createUserDto)
    if (user == null){
      return "Email já cadastrado"
    }

    return "Cadastrado com sucesso!"
  }

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get()
  getUserById(@Param('id') id: number) {
    return this.usersService.getUserById(id);
  }

  @Patch('/:id')
  updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<User> {
      return this.usersService.updateUser(id, updateUserDto)
  }  
}

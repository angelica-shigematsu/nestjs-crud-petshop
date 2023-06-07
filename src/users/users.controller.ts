import { Body, Controller, Get, Param, Patch, Post, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/pets/dto/create-user.dto';
import { User } from 'src/pets/entity/User';
import { UpdateUserDto } from 'src/pets/dto/update-user.dto';

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

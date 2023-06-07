import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { PetsService } from './pets.service';
import { Pet } from '../pets/entity/Pet'
import { User } from './entity/User';
import { UpdatePetDto } from './dto/update-pet.dto';

@Controller('pets')
export class PetsController {
  constructor(private petsService: PetsService) {}

  @Get()
  getAllPets() {
    return this.petsService.getAllPets();
  }

  @Post()
  createPet(@Body() createPetDto: CreatePetDto) {
    return this.petsService.createPets(createPetDto);
  }

  @Get('/:id')
  getPetById(@Param('id') id: number) {
    return this.petsService.getPetById(id);
  }

  @Patch('/:id')
  updatePet(
    @Param('id') id: number,
    @Body() updatePetDto: UpdatePetDto
  ): Promise<Pet> {
    return this.petsService.updatePet(id, updatePetDto);
  }

  @Delete('/:id')
  async deletePet(@Param('id') id: number): Promise<void> {
    return this.petsService.deletePet(id);
  }
}

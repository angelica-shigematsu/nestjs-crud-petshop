import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetDto } from './dto/create-pet.dto';
import { Pet } from './entity/Pet';
import { GenreType } from './types/pets-type.enum';
import { User } from './entity/User';

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet)
    private petRepository: Repository<Pet>) {}

  async createPets(createPetDto: CreatePetDto): Promise<Pet>{
    const { name, breed, birthDate, userId } = createPetDto

    const pet = new Pet();
    pet.name = name;
    pet.breed = breed;
    pet.birthDate = birthDate;
    pet.genre = GenreType.FEMALE;
    pet.userId = userId;

    await pet.save();
    return pet;
  }

  async getPetById(id: number): Promise<Pet> {
    const foundId = await this.petRepository.findOne({where: {id: id}});

    if(!foundId) throw new NotFoundException(`Pet ${id} not found`);

    return foundId;
  }

  async getAllPets(): Promise<Pet[]> {
    const allDataPets = await this.petRepository.find();
    return allDataPets;
  }

  async updatePet(id: number, name: string, breed: string, birthDate: Date, userId: User): Promise<Pet> {
    const pet = await this.getPetById(id);
    pet.name = name;
    pet.breed = breed;
    pet.birthDate = birthDate;
    pet.userId = userId

    await pet.save();
    return pet;
  }

  async deletePet(id: number): Promise<void> {
    await this.petRepository.delete(id);
  }
}

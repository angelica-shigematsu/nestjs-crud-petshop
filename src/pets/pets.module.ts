import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './entity/Pet';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pet])
  ],
  controllers: [PetsController],
  providers: [PetsService]
})
export class PetsModule {}

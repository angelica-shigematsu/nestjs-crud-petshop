import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    PetsModule
  ],
})
export class AppModule {}

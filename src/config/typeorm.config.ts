import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Pet } from '../pets/entity/Pet'

export const typeOrmConfig: TypeOrmModuleOptions =  {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'petscrud1',
  password: 'petscrud1',
  database: 'petsdb',
  entities: [ Pet ],
  synchronize: true
}
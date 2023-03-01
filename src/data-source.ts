import { DataSource } from 'typeorm';
import { Post } from './models/products-model';

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '123456',
  database: 'testdb',
  entities: ['./src/models/*.ts'],
  migrations: ['./src/migrations/*.ts']
});
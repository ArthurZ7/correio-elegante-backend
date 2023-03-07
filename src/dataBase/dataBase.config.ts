import * as dotenv from 'dotenv';

import { IDatabaseConfig } from './interface/dbConfig.interface';

dotenv.config();

export const dataBaseConfig: IDatabaseConfig = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_DEVELOPMENT,
    host: process.env.DB_HOST,
    port: 5432,
    dialect: 'postgres',
    logging: true,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_PRODUCTION,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
  },
};

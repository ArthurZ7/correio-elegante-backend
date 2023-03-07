import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, PRODUCTION } from '../conf/constants';
import { dataBaseConfig } from './database.config';
import { Users } from './models/users/users.models';

export const dataBaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = dataBaseConfig.development;
          break;
        case PRODUCTION:
          config = dataBaseConfig.production;
          break;
        default:
          config = dataBaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([Users]);
      await sequelize.sync({ force: true });
      return sequelize;
    },
  },
];

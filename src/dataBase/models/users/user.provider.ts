import { Users } from './users.models';
import { USERS_REPOSITORY } from '../../../conf/constants';

export const usersProviders = [
  {
    provide: USERS_REPOSITORY,
    useValue: Users,
  },
];

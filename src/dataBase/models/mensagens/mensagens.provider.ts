import { Mensagens } from './mensagens.models';
import { MENSAGENS_REPOSITORY } from '../../../conf/constants';

export const mensagensProviders = [
  {
    provide: MENSAGENS_REPOSITORY,
    useValue: Mensagens,
  },
];

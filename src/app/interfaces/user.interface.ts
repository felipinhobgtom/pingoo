import { Cep } from './cep.interface';

export interface User {
  name: string;
  email: string;
  password: string;
  home: Cep;
}

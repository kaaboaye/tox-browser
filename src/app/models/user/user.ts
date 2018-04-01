import { Person } from '../person/person';

export enum UserRank {
  Serviceman,
  Manager,
  Admin
}

export class User {
  error?: any;
  id: number;
  username: string;
  password: string;
  rank: UserRank;
  identity: Person;
}

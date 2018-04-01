import { Client } from '../client/client';

export class Person {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  client: Client;
}

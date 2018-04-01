import { Person } from '../person/person';

export class Client {
  id: number;
  name: string;
  street: string;
  postalCode: string;
  city: string;
  staff: Person[];
}

import { Person } from '../person/person';

export class JobCompletion {

  id: number;
  prev: JobCompletion;
  prevId: number;
  next: JobCompletion;
  createdAt: Date;
  date: Date;
  description: string;
  repairTime: string;
  annotations: string;
  serviceman: Person;

}

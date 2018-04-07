import { Client } from '../client/client';
import { Person } from '../person/person';
import { Device } from '../device/device';
import { JobRegistration } from '../job-registration/job-registration';

export class Job {

  id: number;
  client: Client;
  applicant: Person;
  dispatcher: Person;
  device: Device;
  registration: JobRegistration;
  createdAt: Date;

}

import { Client } from '../client/client';
import { Person } from '../person/person';
import { Device } from '../device/device';
import { JobRegistration } from '../job-registration/job-registration';
import { JobState } from './job-state.enum';
import { JobDiagnosis } from '../job-diagnosis/job-diagnosis';
import { JobOrder } from '../job-order/job-order';
import { JobCompletion } from '../job-completion/job-completion';

export class Job {

  id: number;
  state: JobState;
  client: Client;
  applicant: Person;
  dispatcher: Person;
  device: Device;
  registration: JobRegistration;
  diagnosis: JobDiagnosis;
  order: JobOrder;
  completion: JobCompletion;
  createdAt: Date;

}

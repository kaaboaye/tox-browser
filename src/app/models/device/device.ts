import { Client } from '../client/client';

export class Device {

  id: number;
  type: string;
  denotement: string;
  serialNumber: string;
  owner: Client;

  // Relations

  events?: Event[];
}

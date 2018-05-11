import { User } from '../user/user';

export class Session {
  error?: any;
  id?: number;
  token: string;
  expireAt: Date;
  user: User;
}

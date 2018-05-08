import { User } from '../user';

export class UserChangePassword {
  constructor(user: User) {
    this.user = user;
  }

  user: User;
  oldPassword: string;
  newPassword: string;
  repeatPassword: string;
}

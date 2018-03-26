export enum UserRank {
  Serviceman,
  Manager,
  Admin
}

export class User {
  error?: any;
  id?: number;
  username: string;
  password?: string;
  rank?: UserRank;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
}

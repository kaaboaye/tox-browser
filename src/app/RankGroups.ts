import { User, UserRank } from './models/user/user';


export class Group {
   public static readonly CreateUser = [ UserRank.Admin ];
   public static readonly ChangeUser = [ UserRank.Manager, UserRank.Admin ];
   public static readonly UpdateJob = [ UserRank.Admin, UserRank.Manager ];

   public static IsMember(user: User, group: UserRank[]): boolean {
     if (!user) {
       return false;
     }

     return group.includes(user.rank);
  }
}

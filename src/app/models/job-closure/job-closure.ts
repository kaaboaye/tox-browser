export class JobClosure {

  id: number;
  prev: JobClosure;
  prevId: number;
  next: JobClosure;
  createdAt: Date;
  dateOfDispatch: Date;
  annotations: string;
  dateOfClosure: Date;

}

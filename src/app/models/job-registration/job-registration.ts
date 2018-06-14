
export enum JobRegistrationType {
  PostWarranty,
  Warranty
}

export class JobRegistration {

  id: number;
  prev: JobRegistration;
  prevId: number;
  next: JobRegistration;
  createdAt: Date;
  type: JobRegistrationType;
  placeOfRealisation: string;
  description: string;

}

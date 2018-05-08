
export enum JobRegistrationType {
  PostWarranty,
  Warranty
}

export class JobRegistration {

  id: number;
  prev: JobRegistration;
  createdAt: Date;
  type: JobRegistrationType;
  placeOfRealisation: string;
  description: string;

}

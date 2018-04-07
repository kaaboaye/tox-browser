
export enum JobRegistrationType {
  PostWarranty,
  Warranty
}

export class JobRegistration {

  id: number;
  createdAt: Date;
  type: JobRegistrationType;
  placeOfRealisation: string;
  description: string;

}

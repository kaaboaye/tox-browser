export class JobOrder {

  id: number;
  prev: JobOrder;
  prevId: number;
  next: JobOrder;
  createdAt: Date;
  numberSAP: string;
  purchaseOrder: string;
  clientsOrder: string;

}

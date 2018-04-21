export class JobOrder {

  id: number;
  prev: JobOrder;
  createdAt: Date;
  numberSAP: string;
  purchaseOrder: string;
  clientsOrder: string;

}

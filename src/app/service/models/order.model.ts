import { OrderState } from './orderState.model'; 
import { OrderDetail } from './orderDetail.model'; 

export class Order {
  orderID: number;
  orderDetails: OrderDetail[];
  orderState: OrderState;
  creationDateTime: string; 
  lastModifiedDateTime: string; 
  clientID: string;
}

import { Order } from './order.model'; 
import { Address } from './addresse.model'; 

export interface Client {
    clientID: string;
    email: string;
    orders: Order[];
    addresses: Address[];
  }
  
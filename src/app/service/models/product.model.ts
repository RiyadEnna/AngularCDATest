import { ProductType } from './productType.model';

export interface Product {
  productID: number;
  name: string;
  productType: ProductType;
  unitPrice: number;
  description?: string;
  stockpiled: number;
}
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/service/models/product.model';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commande-produits',
  templateUrl: './commande-produits.component.html',
  styleUrls: ['./commande-produits.component.css']
})

export class CommandeProduitsComponent implements OnInit {
  productsOrderList: Product[] | undefined;
  selectedQuantities: Map<number, number> = new Map();

  confirmationMessage: string = '';

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((products) => {
      this.productsOrderList = products.filter((product) => product.stockpiled > 0);
    });
  }

  getProductCardClass(product: Product): string {
    switch (product.productType) {
      case 'burger':
        return 'product-card burger';
      case 'beverage':
        return 'product-card beverage';
      case 'side':
        return 'product-card side';
      case 'dessert':
        return 'product-card dessert';
      default:
        return 'product-card';
    }
  }

  updateQuantity(product: Product, quantity: number): void {
    const productId = product.productID;
    this.selectedQuantities.set(productId, quantity);
  }
  
  confirmOrder(product: Product): void {
    const quantity = this.selectedQuantities.get(product.productID) || 0;
    const message = `Commande confirmée : ${quantity} ${product.name}`;

    this.confirmationMessage = message;

    console.log(message);

      this.confirmationMessage = message;
  setTimeout(() => {
    this.confirmationMessage = ''; // Masquer le message
  }, 4000); // Efface le message après 4 secondes
 }
}

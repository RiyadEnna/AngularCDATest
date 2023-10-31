import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/service/models/product.model';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-produits',
  templateUrl: `./liste-produits.component.html`,
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {
  productsList: Product[] =[] ;

  constructor(private productService: ProductService, private router: Router) {}


  ngOnInit(): void {
      this.productService.getAllProduct()
      .subscribe(productsList=>this.productsList = productsList);
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

  selectProduct(product: Product) {
    this.router.navigate(['/produits/liste-produits', product.productID]);
  }

}

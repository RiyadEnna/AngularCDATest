import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/service/models/product.model';
import {ProductService} from '../../service/product.service'


@Component({
  selector: 'app-details-produits',
  templateUrl: './details-produits.component.html',
  styleUrls: ['./detail-produits.component.css']
})
export class DetailsProduitsComponent implements OnInit {
productCurrent:Product|undefined;
productsList: Product[] ;

  constructor(private route: ActivatedRoute, private productService:ProductService){ }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = params.get('productID');
      if (productId) {
        this.productService.getProductById(productId).subscribe((productCurrent) => {
          this.productCurrent = productCurrent;
        });
      }
    });
  }


}
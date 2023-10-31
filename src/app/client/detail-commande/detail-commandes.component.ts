import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/service/models/order.model';
import {OrderService} from '../../service/order.service'


@Component({
  selector: 'app-details-produits',
  templateUrl: './detail-commandes.component.html',
  styleUrls: ['./detail-commandes.component.css']
})
export class DetailsOrderComponent implements OnInit {
orderClientCurrent:Order|undefined;
productsList: Order[] ;

  constructor(private route: ActivatedRoute, private orderService:OrderService){ }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = params.get('orderID');
      if (productId) {
        this.orderService.getOrderById(productId).subscribe((orderClientCurrent) => {
          this.orderClientCurrent = orderClientCurrent;
        });
      }
    });
  }
}
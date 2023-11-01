import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/service/models/order.model';
import {OrderService} from '../../service/order.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-liste-commandes',
  templateUrl:`./liste-commandes.component.html`,
  styleUrls: ['./liste-commandes.component.css']

})
export class ListeCommandesComponent implements OnInit  {
  orderList:Order[]|undefined;
  filteredOrderList: Order[] | undefined;

  constructor( private orderService: OrderService,private router: Router){}

  ngOnInit(): void {
      this.orderService.getAllOrder()
      .subscribe(orderList=>this.orderList = orderList);
  }

  selectOrder(order: Order) {
    this.router.navigate(['client/liste-commandes', order.orderID]);
  }

    filterOrdersByState(orderState: string) {
      this.filteredOrderList = this.orderList?.filter(order => order.orderState === orderState);
    }

    getAll(): void {
      this.orderService.getAllOrder().subscribe(orderList => {
        this.filteredOrderList = orderList;
      });
    }
}

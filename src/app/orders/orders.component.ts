import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: any;
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.orderService.findAll().subscribe(orders => {
      this.orders = orders;
      console.log(orders);
    }, error => {
      console.log(error);
    })
  }

  delete(id) {
    if (confirm('Are you sure you want to delete the oreder with id ' + id + ' ?')) {
      this.orderService.delete(id).subscribe(order => {
        console.log(order);
      }, error => {
        console.log(error);
      })
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-customer',
  templateUrl: './order-customer.component.html',
  styleUrls: ['./order-customer.component.css']
})
export class OrderCustomerComponent implements OnInit {
  id;
  orders: any;
  constructor(private orderService: OrderService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.orderService.findCustomerOrders(this.id).subscribe(order => {
      this.orders = order;
      console.log(order);
    }, error => {
      console.log(error);
    })
  }

}

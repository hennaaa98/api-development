import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  totalPrice;
  constructor(private cartService: CartService, private _location: Location, private router: Router) { }
  
  navigate(destination: string) {
    if (destination == '') {
      this.router.navigate(['']);
    }
  }

  backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardValidator } from './cardValidtor';
import { OrderService } from '../services/order.service';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  form: FormGroup;
  cart = [];

  constructor(private formBulider: FormBuilder, private router: Router, private orderService: OrderService, private cartService: CartService) {
    this.form = this.formBulider.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: [''],
      address: ['', Validators.required],
      address2: [''],
      country: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      billingAddress: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      name: ['', Validators.required],
      creditCardNumber: ['', Validators.compose([Validators.required, CardValidator.validateCardNumber])],
      Expiration: ['', Validators.required],
      cvv: ['', Validators.required],

    });

  }

  navigate(destination: string) {
    if (destination == 'confirmation') {
      this.router.navigate(['/confirmation']);
    }
  }


  onSubmit() {
    const user = JSON.parse(localStorage.getItem('user'));
    let order;

    console.log('valid');
    this.cart.forEach(el => {

      order = { 'totalPrice': this.cartService.getTotalPrice(), 'customerId': user.id, 'quantity': el.quantity, 'shirtId': el.shirt.id };
    })


    this.orderService.create(JSON.stringify(order)).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
    this.router.navigate(['confirmation']);

  }

  ngOnInit(): void {
    this.cart = this.cartService.getItems();
  }

}

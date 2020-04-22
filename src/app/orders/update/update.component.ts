import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id;
  order: any;
  form: FormGroup
  constructor(private _route: ActivatedRoute, private orderService: OrderService, fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      orderStatus: ['', Validators.required],
      shippingStatus: ['', Validators.required],


    })

  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.orderService.findOne(this.id).subscribe(order => {
      this.order = order;
      this.form.get('orderStatus').setValue(this.order.order_status);
      this.form.get('shippingStatus').setValue(this.order.shipping_status);
    }, error => {
      console.log(error);
    })

  }

  submit() {
    this.orderService.update(this.id, JSON.stringify(this.form.value)).subscribe(response => {
      console.log(response);
      this.router.navigate(['/orders']);
    }, error => {
      console.log(error);
    })
  }

}

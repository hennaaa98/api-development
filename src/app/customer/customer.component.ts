import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { Subject } from 'rxjs';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {

  //Variables for the form input

  Name: string;

  Phone: number;

  Email: string;

  Address: string;

  Username: string;

  Password: string;

  Customer: any;
  form: FormGroup;

  //Setting validators for form group
  constructor(fb: FormBuilder, private customerService: CustomerService) {
    this.form = fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }

  //Method - creating customer from form input
  submit() {
    var customer: Customer = {
      Name: this.Name,
      Phone: this.Phone,
      Email: this.Email,
      Address: this.Address,
      Username: this.Username,
      Password: this.Password
    }

    //Service call to send to database
    this.customerService.create(customer);

  }
}



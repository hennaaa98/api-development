import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../services/customer.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class CustomerComponent implements OnInit {

  Name: string;

  Phone: number;

  Email: string;

  Address: string;

  Username: string;

  Password: string;

  Henna: any;
  form: FormGroup;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

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
    //this.getHenna();
  }

  getHenna() {
    this.customerService.getById(1).pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(Henna => {
        this.Henna = Henna;
      })
  }

  submit() {
    var customer: Customer = {
      Name: this.Name,
      Phone: this.Phone,
      Email: this.Email,
      Address: this.Address,
      Username: this.Username,
      Password: this.Password
    }

    this.customerService.create(customer);

  }


}



import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  res;

  constructor(fb: FormBuilder, private customerService: CustomerService, private route: Router) {
    this.form = fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login() {
    this.customerService.login(JSON.stringify(this.form.value)).subscribe(response => {
      console.log(response);
      this.res = response;
      if (this.res.message == 'Auth successful') {
        localStorage.setItem('id_token', this.res.token);
        localStorage.setItem('user', JSON.stringify(this.res.user));
        this.route.navigate([''])
      }
    }, error => {
      console.log(error);
    })
  }

}

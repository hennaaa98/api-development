import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ShritService } from '../../services/shirts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shirt-form',
  templateUrl: './shirt-form.component.html',
  styleUrls: ['./shirt-form.component.css']
})
export class ShirtFormComponent implements OnInit {
  id;
  title: string;
  form: FormGroup;
  shirt: any;
  constructor(fb: FormBuilder, private shritServic: ShritService, private _route: ActivatedRoute) {
    this.form = fb.group({
      name: ['', Validators.required],
      color: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required]

    })
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.id = params['id'];
    })

    if (!this.id) {
      this.title = 'add new shrit';
    } else {
      this.title = 'edit shrit';
      this.shritServic.getById(this.id).subscribe(data => {
        this.shirt = data;
        this.form.get('name').setValue(this.shirt.Name);
        this.form.get('color').setValue(this.shirt.Color);
        this.form.get('price').setValue(this.shirt.Price);
        this.form.get('description').setValue(this.shirt.Description);
        this.form.get('imageUrl').setValue(this.shirt.ImageUrl);
      })
    }
  }


  submit() {

    if (this.id) {
      this.shritServic.update(this.id, JSON.stringify(this.form.value)).subscribe(response => {
        console.log(response)
      }, error => {
        console.log(error);
      })
    } else {
      console.log(JSON.stringify(this.form.value));
      this.shritServic.create(JSON.stringify(this.form.value)).subscribe(response => {
        console.log(response)
      }, error => {
        console.log(error);
      }
      )
    }


  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ShritService } from '../../services/shirts.service';
import { SizeService } from '../../services/size.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shirt-form',
  templateUrl: './shirt-form.component.html',
  styleUrls: ['./shirt-form.component.css']
})
export class ShirtFormComponent implements OnInit {
  isLinear = false;
  id;
  title: string;
  form: FormGroup;
  form2: FormGroup;
  shirt: any;
  size: any;
  
  constructor(fb: FormBuilder, private shritServic: ShritService, private _route: ActivatedRoute, private siezService: SizeService) {
    this.form = fb.group({
      name: ['', Validators.required],
      color: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required]

    })

    this.form2 = fb.group({
      size: ['', Validators.required],
      shirtId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.id = params['id'];
    })

    if (!this.id) {
      this.title = 'Add new shirt';
    } else {
      this.title = 'Edit Shirt';
      this.shritServic.getById(this.id).subscribe(data => {
        this.shirt = data;
        this.form.get('name').setValue(this.shirt.Name);
        this.form.get('color').setValue(this.shirt.Color);
        this.form.get('price').setValue(this.shirt.Price);
        this.form.get('description').setValue(this.shirt.Description);
        this.form.get('imageUrl').setValue(this.shirt.ImageUrl);
      })

      this.siezService.find(this.id).subscribe(data => {
        this.size = data[0];
        this.form2.get('size').setValue(this.size.size);
        this.form2.get('shirtId').setValue(this.id);
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
        this.shirt = response;
        this.form2.get('shirtId').setValue(this.shirt.id);
        console.log(response)
      }, error => {
        console.log(error);
      }
      )

    }


  }

  submitSize() {
    if (this.id) {
      this.siezService.update(this.size.id, JSON.stringify(this.form2.value)).subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
    } else {
      this.siezService.create(JSON.stringify(this.form2.value)).subscribe(data => {
        console.log(data)
      }, error => {
        console.log(error);
      })
    }


  }

}

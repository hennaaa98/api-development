import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ShritService } from '../../services/shirts.service';

@Component({
  selector: 'app-shirt-form',
  templateUrl: './shirt-form.component.html',
  styleUrls: ['./shirt-form.component.css']
})
export class ShirtFormComponent implements OnInit {
  id;
  title: string;
  form: FormGroup;
  constructor(fb: FormBuilder, private shritServic: ShritService) {
    this.form = fb.group({
      name: ['', Validators.required],
      color: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required]

    })
  }

  ngOnInit(): void {
    if (!this.id) {
      this.title = 'add new shrit';
    } else {
      this.title = 'edit shrit';
    }
  }


  submit() {

    console.log(JSON.stringify(this.form.value));
    this.shritServic.create(JSON.stringify(this.form.value)).subscribe(response => {
      console.log(response)
    }, error => {
      console.log(error);
    }
    )
  }

}

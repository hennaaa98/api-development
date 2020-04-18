import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShritService } from '../../services/shirts.service';

@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.css']
})
export class ShirtComponent implements OnInit {
  id;
  shrit: any;
  constructor(private _route: ActivatedRoute, private shritService: ShritService) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.shritService.getById(this.id).subscribe(data => {
      console.log(data)
      this.shrit = data;
    }, error => {
      console.log(error);
    })

  }

}

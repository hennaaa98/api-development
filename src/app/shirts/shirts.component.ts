import { Component, OnInit } from '@angular/core';
import { ShritService } from '../services/shirts.service';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {
  shirts: any;
  constructor(private shritServic: ShritService) { }

  ngOnInit(): void {
    this.retrieveShirts();
  }

  retrieveShirts() {
    this.shritServic.getAll().subscribe(data => {
      console.log(data);
      this.shirts = data;
    }, error => {
      console.log(error);
    }
    );
  }

  delete(id) {
    if (confirm('Are you sure you want to delete this t-shirt?')) {
      this.shritServic.delete(id).subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      }
      )
    }

    window.location.reload();
  }
}

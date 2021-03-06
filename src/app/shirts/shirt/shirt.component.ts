import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShritService } from '../../services/shirts.service';
import { SizeService } from '../../services/size.service';
import { CartService } from '../../services/cart.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.css']
})
export class ShirtComponent implements OnInit {
  id;
  shrit: any;
  sizes: any;

  constructor(private _route: ActivatedRoute, private shritService: ShritService, private sizeService: SizeService, private cartService: CartService, private router: Router) {
  }

  navigate(destination: string) {
    if (destination == 'cart') {
      this.router.navigate(['/cart']);
    }
  }
  
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.shritService.getById(this.id).pipe(takeUntil(this.ngUnsubscribe)).subscribe(data => {
      console.log(data)
      this.shrit = data;
    }, error => {
      console.log(error);
    })

    this.sizeService.find(this.id).pipe(takeUntil(this.ngUnsubscribe)).subscribe(data => {
      this.sizes = data;
      console.log(data);
    }, error => {
      console.log(error);
    });

  }


  delete(id) {
    if (confirm('are you sure you want to delete this size ? ')) {
      this.sizeService.delete(id).subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
    }
  }

  addToCard(shrit) {
    this.cartService.addToCart(shrit);
    console.log(this.cartService.getItems());
  }
}

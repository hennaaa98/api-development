import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  /* templateUrl: './app.component.html', */
  template: `
    <rating></rating>
  `,
    /* <input type="text" [(ngModel)]="title" />
    You have typed: {{title}} */
    /* <h1>{{title}}</h1>
      <button (click)="onClick($event)">Submit</button> */
    /* <img src="{{imageUrl}}" />
    <button 
      class="btn btn-primary"
      [style.backgroundColor]="isActive ? 'blue':'gray'">Submit</button> */
    /* [class.active]="isActive">Submit</button> */
    /*<products></products> */
  providers:[ProductService]
  /* styleUrls: ['./app.component.css'] */
})
export class AppComponent {
  constructor() {
    setTheme('bs4');
  }
  title = "hello";
  
  /* title : string = 'My Second Angular App!';
  imageUrl = "http://lorempixel.com/400/200/"; */

  /* isActive = true; */
  /* isActive = false; */

  /* onClick($event){
    console.log("Clicked",$event)
  } */
}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShirtsComponent } from '../app/shirts/shirts.component';
import { ShirtComponent } from '../app/shirts/shirt/shirt.component';
import { ShirtFormComponent } from '../app/shirts/shirt-form/shirt-form.component';
import { CustomerComponent } from './customer/customer.component';
import { FrontPageComponent } from './front-page/front-page.component';


const routes: Routes = [
  { path: '', component: FrontPageComponent},
  { path: 'shirt', component: ShirtsComponent },
  { path: 'shirts/:id', component: ShirtComponent },
  { path: 'add', component: ShirtFormComponent },
  { path: 'add/:id', component: ShirtFormComponent },
  { path: 'signup', component: CustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

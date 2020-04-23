import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShirtsComponent } from '../app/shirts/shirts.component';
import { ShirtComponent } from '../app/shirts/shirt/shirt.component';
import { ShirtFormComponent } from '../app/shirts/shirt-form/shirt-form.component';
import { CustomerComponent } from './customer/customer.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { UpdateComponent } from './orders/update/update.component';
import { OrderCustomerComponent } from './orders/order-customer/order-customer.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: FrontPageComponent},
  { path: 'shirt', component: ShirtsComponent },
  { path: 'shirts/:id', component: ShirtComponent },
  { path: 'add', component: ShirtFormComponent },
  { path: 'add/:id', component: ShirtFormComponent },
  { path: 'signup', component: CustomerComponent },
  { path: 'cart', component: CartComponent },
  { path: '', component: CustomerComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'edit/:id', component: UpdateComponent },
  { path: 'orders/:id', component: OrderCustomerComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

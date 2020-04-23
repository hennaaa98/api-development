import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { ShritService } from '../app/services/shirts.service';
import { SizeService } from '../app/services/size.service';
import { ShirtFormComponent } from './shirts/shirt-form/shirt-form.component';
import { ShirtComponent } from './shirts/shirt/shirt.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { NavbarComponent } from './navbar/navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { CustomerComponent } from './customer/customer.component';
import { CustomerService } from './services/customer.service';
import { FrontPageComponent } from './front-page/front-page.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cart.service';
import { OrdersComponent } from './orders/orders.component';
import { OrderService } from './services/order.service';
import { UpdateComponent } from './orders/update/update.component';
import { MatSelectModule } from '@angular/material/select';
import { OrderCustomerComponent } from './orders/order-customer/order-customer.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ShirtsComponent,
    ShirtFormComponent,
    ShirtComponent,
    NavbarComponent,
    CustomerComponent,
    FrontPageComponent,
    CartComponent,
    OrdersComponent,
    UpdateComponent,
    OrderCustomerComponent,
    CheckoutComponent,
    ConfirmationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatStepperModule,
    MatMenuModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule,
    FlexLayoutModule,
    MatSelectModule
    ],
    MatSelectModule

  providers: [ShritService, SizeService, CustomerService, CartService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

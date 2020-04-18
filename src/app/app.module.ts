import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { ShritService } from '../app/services/shirts.service';
import { ShirtFormComponent } from './shirts/shirt-form/shirt-form.component';
import { ShirtComponent } from './shirts/shirt/shirt.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ShirtsComponent,
    ShirtFormComponent,
    ShirtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [ShritService],
  bootstrap: [AppComponent]
})
export class AppModule { }

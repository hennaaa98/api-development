import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


const firebaseConfig = {
  apiKey: "AIzaSyD2eM9W-iBwvGdVuVtB7qPhbyXSPPH3NmI",
  authDomain: "todos-2ed39.firebaseapp.com",
  databaseURL: "https://todos-2ed39.firebaseio.com/",
  projectId: "todos-2ed39",
  storageBucket: "todos-2ed39.appspot.com",
  messagingSenderId: "456656761812",
  appId: "1:456656761812:web:dff75ec896aedcb7771c41"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

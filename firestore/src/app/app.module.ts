import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';

var firebaseConfig = {
  apiKey: "AIzaSyCI0a19Iu3e5gugvIiAcUYiYyoQgQWOIsU",
  authDomain: "firestore-c2ac0.firebaseapp.com",
  databaseURL: "https://firestore-c2ac0.firebaseio.com",
  projectId: "firestore-c2ac0",
  storageBucket: "firestore-c2ac0.appspot.com",
  messagingSenderId: "53581919445",
  appId: "1:53581919445:web:245d7b57ab03f54fe4de5c",
  measurementId: "G-CEXFPNT5FM"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

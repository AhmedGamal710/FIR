import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { FormsModule } from '@angular/forms';
// to base code from firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    NavbarComponent,
    CartComponent,
    GoodsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule ,
    FormsModule,
    // 
    AngularFirestoreModule,
    AngularFireModule.initializeApp(
      // this from firebase 
      {
        apiKey: "AIzaSyAFbN0ut-49hk8ymj_ZkmmAINJ8WUTRy8Q",
        authDomain: "firappkmr.firebaseapp.com",
        databaseURL: "https://firappkmr.firebaseio.com",
        projectId: "firappkmr",
        storageBucket: "firappkmr.appspot.com",
        messagingSenderId: "623108098801",
        appId: "1:623108098801:web:e3946ff2e2f905ec14b750",
        measurementId: "G-MTR78QTLD2"
      }
    ),
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

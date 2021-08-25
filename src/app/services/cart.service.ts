import { Injectable } from '@angular/core';
import { GoodInterface } from '../interfaces/good.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private fs:AngularFirestore,private as:AuthService) {   }
  
  addToCart(data: GoodInterface) {
     return this.fs.collection(`users/$(this.as.userId)/cart`).add(data)
  }
  getCart(){
    return this.fs.collection(`users/$(this.as.userId)/cart`).snapshotChanges()
  }
  delete(id) {
    return this.fs.doc(`users/$(this.as.userId)/cart`).delete();
  }
  save(id,amount) {
    return this.fs.doc(`users/$(this.as.userId)/cart/${id}`).update({
      amount
    })
  }
}

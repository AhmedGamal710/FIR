import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class GoddsService {

  constructor(private fs:AngularFirestore,private storage:AngularFireStorage) { }
  getAllGoods(){
    return this.fs.collection('goods').snapshotChanges();
  }
  addNewGood(name:String, price:number, image:File) {
   let ref =  this.storage.ref(`goods/` + image.name)
   return new Promise((resolve, reject) => {
    ref.put(image).then( () => {
      ref.getDownloadURL().subscribe(photoUrl =>{
        this.fs.collection(`goods`).add({
          name,
          // price ,
          photoUrl
        }).then(() => resolve('hello resolve islam'))
      })
    })
   })
  }
}

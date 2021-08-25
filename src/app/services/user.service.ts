import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private  fs : AngularFirestore,private as:AuthService) { }
  addNewUser(id,name,addres,password,email){
    return this.fs.doc('users/' + id).set({ 
      name,
      addres,
      password,
      email
     })
  }
  addNewData(){
    return this.fs.doc('users/' + this.as.userId).valueChanges()
  }
}

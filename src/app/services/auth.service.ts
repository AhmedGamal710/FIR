import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user :Observable<firebase.User> 
  userId = '';

  constructor(private fs:AngularFireAuth) { 
    this.user = fs.user 
  }
  signup(email,password){ 
   return this.fs.auth.createUserWithEmailAndPassword(email, password)
  }
  logout(){
    return this.fs.auth.signOut()
  }
  login(email,password) {
    return this.fs.auth.signInWithEmailAndPassword(email, password);
  }

}

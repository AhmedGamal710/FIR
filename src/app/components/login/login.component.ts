import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private as:AuthService ,private router:Router) { }
  ngOnInit() {
  }
  messageErr = '';
  login(form) {
    let data = form.value ;
    this.as.login(data.email,data.password) 
    .then(
      result => {
        this.messageErr = '';
        console.log(result);
        this.router.navigate(['/'])
      })
      .catch(
        err => {
          console.log('errrrror',err);
          this.messageErr = err.message;
        }
      )
  }
}

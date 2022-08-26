import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { auth, Authservice } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  Islogin = false
  isloading = false
  error: null | string = null
 
  constructor(private authservice: Authservice) { }

  ngOnInit(): void {
  }
  Onswitchmode() {
    this.Islogin = !this.Islogin
  }
  Onsubmit(formvalues: NgForm) {
    let authobs : Observable<auth>
    this.isloading = true
    if (this.Islogin) {
      authobs = this.authservice.signin(formvalues.value.email, formvalues.value.password)
      formvalues.reset()
    }
    else {
      authobs = this.authservice.signup(formvalues.value.email, formvalues.value.password)
      formvalues.reset()
    }
    
  authobs.subscribe(
    responsedata => {
      console.log(responsedata)
      this.isloading = false
    },
    error => {
      this.isloading = false
      this.error = error
    }
  )

  }
  onHandleError() {
    this.error = null;
  }

}

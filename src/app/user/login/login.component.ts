import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {AngularFireAuth} from '@angular/fire/compat/auth'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  credentials={
    email:'',
    password:''
  }

  showAlert = false
  alertMsg = 'please wait! we are loggin you in.'
  alertColor = 'blue'
  inSubmission = false 

  constructor(
    private auth :AngularFireAuth
  ){

  }

  async login(){
    this.showAlert = true
    this.alertColor = 'blue'
    this.alertMsg = 'please wait we are loggin you in.'
    this.inSubmission = true

   try {
    await this.auth.signInWithEmailAndPassword(
      this.credentials.email, this.credentials.password
    )
   } catch (error) {
    this.inSubmission = false
    this.alertColor='red'
    this.alertMsg = 'An unexpected error occured. Please try again later'

    return
   }

   this.alertMsg = 'Success you are logged in'
   this.alertColor = 'green'
  }

}

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Iuser from 'src/app/models/user.models';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  constructor(
    private authService : AuthService
  ){}

  //alert details
  showAlert=false
  alertMsg='Please wait!. Your Account is being created'
  alertColor='blue'

  //submision of form
  inSubmission = false


  name = new FormControl('', [
    Validators.required,
    Validators.minLength(4)
  ]);
  email = new FormControl('', 
  [Validators.required, 
  Validators.email]
    );
  age = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(18),
    Validators.max(120),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  ]);
  confirm_password = new FormControl('', [Validators.required]);
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(10),
  ]);

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber,
  });

  
 
  //onsubmit
  async register() {
    this.showAlert=true
    this.alertMsg='Please wait!. Your Account is being created'
    this.alertColor='blue'
    this.inSubmission =true


    try {
      await this.authService.createUser(this.registerForm.value as Iuser)
    } catch (error) {
      console.log(error)
      //error occured
      //changing the alert bg color and message
      this.alertMsg = 'An Unexpected error occured. Please try again'
      this.alertColor='red'  
      this.inSubmission = false
      return  
    }
    //register success
    this.alertMsg = 'Success! Yout account has been created'
    this.alertColor = 'green'

  }

}

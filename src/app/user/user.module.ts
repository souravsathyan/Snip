import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutModalComponent } from './aut-modal/aut-modal.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AutModalComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports:[
    AutModalComponent
  ]
})
export class UserModule { }

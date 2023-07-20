import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutModalComponent } from './aut-modal/aut-modal.component';



@NgModule({
  declarations: [
    AutModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AutModalComponent
  ]
})
export class UserModule { }

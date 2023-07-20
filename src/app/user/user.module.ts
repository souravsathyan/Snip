import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutModalComponent } from './aut-modal/aut-modal.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AutModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    AutModalComponent
  ]
})
export class UserModule { }

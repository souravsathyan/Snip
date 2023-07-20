import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  
})
export class ModalComponent {

  constructor(public modal:ModalService){}
  
  //openeing the modal
  isDisplay(){
    return this.modal.isModalOpen()
  }

  //closing the modal
  closeModal(){
    this.modal.toggleModal()
  }
}

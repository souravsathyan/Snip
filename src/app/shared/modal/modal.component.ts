import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  
})
export class ModalComponent {
  @Input() modalID=''
  constructor(public modal:ModalService){}

  //closing the modal
  closeModal(){
    this.modal.toggleModal(this.modalID)
  }
}

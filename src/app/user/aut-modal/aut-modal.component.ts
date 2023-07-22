import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-aut-modal',
  templateUrl: './aut-modal.component.html',
  styleUrls: ['./aut-modal.component.css']
})
export class AutModalComponent implements OnInit, OnDestroy{

  constructor(public modal:ModalService){}

  ngOnInit(): void {
    this.modal.register('auth');
  }

  ngOnDestroy(): void {
    this.modal.unregister('auth')
  }

  
}

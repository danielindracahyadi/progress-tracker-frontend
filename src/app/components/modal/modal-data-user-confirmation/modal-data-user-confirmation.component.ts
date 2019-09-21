import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'component-modal-data-user-confirmation',
  templateUrl: './modal-data-user-confirmation.component.html',
})
export class ModalDataUserConfirmationComponent implements OnInit {
  user = '';

  constructor(public modalService: ModalService) { }

  ngOnInit() {
    this.user = this.modalService.getUser();
  }

}

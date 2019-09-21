import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'component-modal-data-user-delete',
  templateUrl: './modal-data-user-delete.component.html',
})
export class ModalDataUserDeleteComponent implements OnInit {
  user = '';
  constructor(public modalService: ModalService) { }

  ngOnInit() {
    this.user = this.modalService.getUser();
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'component-modal-data-user-submit',
  templateUrl: './modal-data-user-submit.component.html',
})
export class ModalDataUserSubmitComponent implements OnInit {

  user = '';
  constructor(public modalService: ModalService) { }

  ngOnInit() {
    this.user = this.modalService.getUser();
  }

}

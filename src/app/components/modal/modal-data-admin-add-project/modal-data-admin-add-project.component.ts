import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-data-admin-add-project',
  templateUrl: './modal-data-admin-add-project.component.html',
  styleUrls: ['./modal-data-admin-add-project.component.sass'],
})
export class ModalDataAdminAddProjectComponent implements OnInit {

  constructor() { }

  projectName: string;

  ngOnInit() {

  }

  save(){
    console.log(this.projectName);
    window.location.reload();
  }
}

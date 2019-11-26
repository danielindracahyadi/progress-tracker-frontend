import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-data-admin-add-role',
  templateUrl: './modal-data-admin-add-role.component.html',
  styleUrls: ['./modal-data-admin-add-role.component.sass'],
})
export class ModalDataAdminAddRoleComponent implements OnInit {

  constructor() { }

  roleName: string;

  ngOnInit() {
  }
  save(){
    console.log(this.roleName);
    window.location.reload();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-data-admin-add',
  templateUrl: './modal-data-admin-add.component.html',
  styleUrls: ['./modal-data-admin-add.component.sass'],
})
export class ModalDataAdminAddComponent implements OnInit {

  constructor() { }

  namaUser: string;
  emailUser: string;
  userName: string;
  password: string;

  ngOnInit() {
  }
  save(){
    console.log(this.namaUser);
    console.log(this.emailUser);
    console.log(this.userName);
    console.log(this.password);
    window.location.reload();
  }

}

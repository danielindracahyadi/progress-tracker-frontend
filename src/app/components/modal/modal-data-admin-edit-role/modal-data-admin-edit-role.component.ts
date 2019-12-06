import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MainDashboardService } from 'src/app/pages/admin/main-dashboard/main-dashboard.service';
import { MainDashboardComponent } from 'src/app/pages/admin/main-dashboard/main-dashboard.component';

@Component({
  selector: 'app-modal-data-admin-edit-role',
  providers: [MainDashboardComponent],
  templateUrl: './modal-data-admin-edit-role.component.html',
  styleUrls: ['./modal-data-admin-edit-role.component.sass']
})
export class ModalDataAdminEditRoleComponent implements OnInit {
  category = '';
  namaRole: string;
  theData: any;
  errorMessage: string = '';
  errorLogin: boolean = false;

  constructor(
    public modalService: ModalService,
    public mainDashboardService: MainDashboardService,
    public mainDashboard: MainDashboardComponent,
    private httpClient: HttpClient,
  ) { }

  ngOnInit() {
    if (this.mainDashboardService.selectedMainDashboardCategory === '') {
      this.modalService.setCategory('Project');
    } else {
      this.modalService.setCategory(this.mainDashboardService.selectedMainDashboardCategory);
    }
    this.category = this.modalService.getCategory();
  }

  onConfirm() {
    console.log(this.category);
    console.log(this.namaRole);

    const token = localStorage.getItem("adminToken");
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      authorization: token
    });
    let options = { headers: headers };
    this.httpClient.post('https://nameless-cove-75161.herokuapp.com/api/feature/admin/edit-role/' + this.modalService.getTheCurrentChosenID(),
      {
        'roleName': this.namaRole,
      },
      options
    )
      .subscribe(
        data => {
          this.theData = data;
          if (this.theData.success === true) {
            window.location.reload();
          } else {
          }
        },
        error => {
          this.errorLogin = true;
          this.errorMessage = error.error.message;
          return;
        }
      );
  }
}
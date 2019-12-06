import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';
import { MainDashboardService } from 'src/app/pages/admin/main-dashboard/main-dashboard.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MainDashboardComponent } from 'src/app/pages/admin/main-dashboard/main-dashboard.component';

@Component({
  selector: 'app-modal-data-admin-edit',
  providers: [MainDashboardComponent],
  templateUrl: './modal-data-admin-edit.component.html',
  styleUrls: ['./modal-data-admin-edit.component.sass']
})
export class ModalDataAdminEditComponent implements OnInit {
  category = '';
  namaUser: string;
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
    const token = localStorage.getItem("adminToken");
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      authorization: token
    });
    let options = { headers: headers };
    this.httpClient.post('https://nameless-cove-75161.herokuapp.com/api/auth/admin/edit-user/' + this.modalService.getTheCurrentChosenID(),
      {
        'name': this.namaUser,
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

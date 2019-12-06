import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';
import { MainDashboardService } from 'src/app/pages/admin/main-dashboard/main-dashboard.service';
import { MainDashboardComponent } from 'src/app/pages/admin/main-dashboard/main-dashboard.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-modal-data-admin-edit-project',
  providers: [MainDashboardComponent],
  templateUrl: './modal-data-admin-edit-project.component.html',
  styleUrls: ['./modal-data-admin-edit-project.component.sass']
})
export class ModalDataAdminEditProjectComponent implements OnInit {
  category = '';
  namaProject: string;
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
    console.log(this.namaProject);

    const token = localStorage.getItem("adminToken");
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      authorization: token
    });
    let options = { headers: headers };
    this.httpClient.post('https://nameless-cove-75161.herokuapp.com/api/feature/admin/edit-project/' + this.modalService.getTheCurrentChosenID(),
      {
        'projectName': this.namaProject,
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

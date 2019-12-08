import { Component, OnInit, Input, Output } from "@angular/core";
import { TIMELINE } from "../../../constants/index";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { ResponseObject } from "src/app/types";
import { Router } from "@angular/router";
import { MainDashboardService } from "../main-dashboard/main-dashboard.service";
@Component({
  selector: "page-admin-main-dashboard-time",
  templateUrl: "./main-dashboard-time.component.html",
  styleUrls: ["./main-dashboard-time.component.sass"]
})
export class MainDashboardTimeComponent implements OnInit {
  timelines = TIMELINE;
  objectCard: any;
  dataRoles: any;

  dataProject: any;
  dataName: any;
  MainDashboardCategory: any;
  SelectedID: any;
  showNameProject = false;
  showNameRoles = false;
  showEmptyData = false;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private mainDashboardService: MainDashboardService
  ) {}

  onClick(item) {
    this.mainDashboardService.setSelectedDate(item.reportdate);
    this.router.navigateByUrl("home-admin/report-detail");
  }

  ngOnInit() {
    if (this.mainDashboardService.selectedID === undefined) {
      alert("No ID chosen, please chose the data first");
      this.router.navigateByUrl("home-admin");
    }
    this.MainDashboardCategory = this.mainDashboardService.selectedMainDashboardCategory;
    this.SelectedID = this.mainDashboardService.selectedID;
    const token = localStorage.getItem("adminToken");
    const headers = new HttpHeaders().set("authorization", token);
    this.httpClient
      .get(
        "https://nameless-cove-75161.herokuapp.com/api/page/admin/timeline?filterBy=" +
          this.mainDashboardService.selectedFilter +
          "&id=" +
          this.SelectedID,
        {
          headers
        }
      )
      .subscribe(
        (response: ResponseObject) => {
          this.objectCard = response.data;
          this.dataRoles = response.data.rolename;
          this.dataProject = response.data.projectname;
          this.dataName = this.mainDashboardService.getSelectedName();
          if (response.data.length === 0) {
            this.showEmptyData = true;
          }
          if (this.mainDashboardService.getSelectedFilter() === "projects") {
            this.showNameProject = true;
            this.showNameRoles = false;
          } else if (
            this.mainDashboardService.getSelectedFilter() === "roles"
          ) {
            this.showNameProject = false;
            this.showNameRoles = true;
          }
        },
        error => {
          console.log(error);
        }
      );
  }
}

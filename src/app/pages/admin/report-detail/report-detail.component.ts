import { Component, OnInit, Input } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { ResponseObject } from "src/app/types";
import { MainDashboardService } from "../main-dashboard/main-dashboard.service";

@Component({
  selector: "page-admin-report-detail",
  templateUrl: "./report-detail.component.html",
  styleUrls: ["./report-detail.component.sass"]
})
export class AdminReportDetailComponent implements OnInit {
  @Input() dataDummy: any;
  selectedData: any;
  objectCard: any;

  constructor(
    private httpClient: HttpClient,
    private mainDashboardService: MainDashboardService
  ) {}

  ngOnInit() {
    const token = localStorage.getItem("adminToken");
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      authorization: token
    });

    this.httpClient
      .get(
        "https://nameless-cove-75161.herokuapp.com/api/page/admin/report-detail?filterBy=" +
          this.mainDashboardService.getSelectedFilter() +
          "&id=" +
          this.mainDashboardService.getSelectedID() +
          "&date=" +
          this.mainDashboardService.getSelectedDate(),
        {
          headers
        }
      )
      .subscribe(
        (response: ResponseObject) => {
          this.objectCard = response.data;
        },
        error => {
          console.log(error);
        }
      );
  }

  change(tasks) {
    this.selectedData = [tasks];
  }
}

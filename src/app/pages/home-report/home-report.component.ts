import { AppService } from "./../../app.service";
import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { ResponseObject } from "src/app/types";
import { HomeReportService } from "./home-report.service";

@Component({
  selector: "page-home-report",
  templateUrl: "./home-report.component.html",
  styleUrls: ["./home-report.component.sass"]
})
export class HomeReportComponent implements OnInit {
  constructor(
    private appService: AppService,
    private activatedRoutes: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
    private homereportService: HomeReportService
  ) {}

  userName: any;
  dataHome: any = {};
  dataNull: any = [];
  pembanding = [];
  tanggal = [];
  date: Date;
  hasil = [];
  emptyResult = [];
  allResult = [];
  temp: number = 0;
  empty: number = 0;
  showEmpty: boolean = false;
  textSearch: string = "";

  async ngOnInit() {
    if (localStorage.getItem("userToken") === null) {
      this.router.navigateByUrl("");
    }
    const token = localStorage.getItem("userToken");
    this.userName = localStorage.getItem("userName");
    const headers = new HttpHeaders().set("authorization", token);
    await this.httpClient
      .get("https://nameless-cove-75161.herokuapp.com/api/page/home", {
        headers
      })
      .subscribe(
        (response: ResponseObject) => {
          this.dataHome = response;
          this.temp = 0;

          this.empty = 31 - this.dataHome.data.length;

          for (let i = 31; i >= 0; i--) {
            this.allResult.push({
              id: null,
              reportdate:
                "2019-10-" + ("0" + (i + 1)).slice(-2) + "T00:00:00.000Z",
              division: []
            });
          }

          for (let i = 0; i <= 31; i++) {
            for (let j = 0; j < this.dataHome.data.length; j++) {
              if (
                this.allResult[i].reportdate.substring(10, 8) ==
                new Date(this.dataHome.data[j].reportdate).getDate()
              ) {
                this.allResult[i] = this.dataHome.data[j];
                break;
              }
            }
          }

          for (let i = 0; i < this.allResult.length; i++) {
            if (this.allResult[i].id === null) {
              this.emptyResult.push(this.allResult[i]);
            }
          }

          this.hasil = this.allResult;
        },
        error => {
          console.log(error);
        }
      );
  }

  emptyCard() {
    this.showEmpty = true;
    this.hasil = this.emptyResult;
  }

  allCard() {
    this.showEmpty = false;
    this.hasil = this.allResult;
  }

  search() {
    this.hasil = this.allResult;
    if (this.textSearch === "") {
      this.hasil = this.allResult;
    } else {
      let search = this.textSearch;
      let filteredArray = this.hasil
        .filter(element =>
          element.division.some(division =>
            division.projectname.toLowerCase().includes(search.toLowerCase())
          )
        )
        .map(element => {
          let newElt = Object.assign({}, element);
          return newElt;
        });
      this.hasil = filteredArray;
    }
  }
}

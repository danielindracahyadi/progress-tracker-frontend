import { Component, OnInit,Input,Output } from '@angular/core';
import { TIMELINE } from '../../../constants/index';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ResponseObject } from 'src/app/types';
import { Router } from '@angular/router';
import { MainDashboardService } from '../main-dashboard/main-dashboard.service';
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
   private httpClient:HttpClient,
   private router : Router,
   private mainDashboardService: MainDashboardService,
  ) { }

  onClick(item){
      this.mainDashboardService.setSelectedDate(item.reportdate)
      this.router.navigateByUrl('home-admin/report-detail');
  }

  ngOnInit() {
   const token = localStorage.getItem('userToken');
   const headers = new HttpHeaders()
           .set('authorization', token);
    this.httpClient.get('https://nameless-cove-75161.herokuapp.com/api/page/admin/timeline?filterBy=projects&id=123',
   {
     headers
   })
   .subscribe(
     (response: ResponseObject)  => {
       this.objectCard =  response.data;
       this.dataRoles = response.data.rolename;
     },
   error  => {
     console.log(error);
   }
   );
   }

}

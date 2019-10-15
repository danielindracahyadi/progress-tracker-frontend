import { AppService } from './../../../app.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseObject } from 'src/app/types';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-admin-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.sass']
})
export class MainDashboardComponent implements OnInit {
  dataProjectName: any;
  dataRoleName: any;
  dataUserName: any;
  dataMainDashboard11: any = [];

  showDetailProject = true;
  showDetailUser = false;
  showDetailRole = false;
  public index: number;
  public selfRef: MainDashboardComponent;

  @Input() dataMainDashboard = '';

  @Output() dataMainDashboardFinal;

  mainDashboardName = '';




  mainDashboards = [];
  constructor(
    private appService: AppService,
    private activatedRoutes: ActivatedRoute,
    private router: Router,
    private _translateService: AppService,
    private httpClient: HttpClient
  ) { }



  ngOnInit() {
    const token = localStorage.getItem('userToken');
    const headers = new HttpHeaders()
            .set('authorization', token);
    console.log('token');
    this.httpClient.get('https://nameless-cove-75161.herokuapp.com/api/page/admin/home',
    {
      headers
    })
    .subscribe(
      (response: ResponseObject)  => {
        console.log(response);
        this.dataMainDashboard11 = Object.keys(response.data);
        console.log(Object.keys(response.data));
        console.log(this.dataMainDashboard11);

        this.dataProjectName = response.data.project;
        this.dataRoleName = response.data.role;
        this.dataUserName = response.data.user;
        console.log(this.dataProjectName);
        console.log(this.dataRoleName);
        console.log(this.dataUserName);
        // this.objectExpansion = [{
        //   projects: this.dataProjectName,
        //   roles: this.dataRoleName,
        //   users: this.dataUserName,
        // }];
      },
    error  => {
      console.log('err', error);
    }
    );
    console.log('tes');

    // addExpansionProject() {
    //   this.objectExpansion.push({
    //     projects: this.dataProjectName,
    //     roles: this.dataRoleName,
    //     users: this.dataUserName,
    //   });
    // }



    // this.dataMainDashboardFinal = this.dataMainDashboard;
    // if (this.mainDashboards.length != 0) {
    //   this.dataMainDashboardFinal = this.mainDashboards;
    // }

    // this._translateService.mainDashboardName.subscribe(
    //   () => {
    //     if (this.appService.getSelectedMainDashboardName() === 'Project') {
    //       this.showDetailProject = true;
    //       this.showDetailRole = false;
    //       this.showDetailUser = false;
    //     } else if (this.appService.getSelectedMainDashboardName() === 'Role') {
    //       this.showDetailRole = true;
    //       this.showDetailProject = false;
    //       this.showDetailUser = false;
    //     } else if (this.appService.getSelectedMainDashboardName() === 'User') {
    //       this.showDetailUser = true;
    //       this.showDetailRole = false;
    //       this.showDetailProject = false;
    //     }
    //   }
    // );
  }

  onSubmit(searchResult: string) {
    console.log(searchResult);
  }
}

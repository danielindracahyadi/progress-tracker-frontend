import { AddReportService } from './add-report.service';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ResponseObject } from 'src/app/types';

@Component({
  selector: 'add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.sass']
})
export class AddReportComponent implements OnInit {
  dataProjectsName: any;
  dataRolesName: any;
  objectCard: any;
  selectedDataProject = '';
  selectedDataRole = '';

  showDetail = false;

  taskData = [{
    jobTitle: '',
    jobDesc: '',
    progress: '',
  }];
  divisionAddReportData = [{
    projectName : '',
    roleName : '',
    task : this.taskData
  }];
  addReportData = {
    reportDate : '',
    division : this.divisionAddReportData
  };

  constructor(
    private httpClient: HttpClient,
    private addReportService: AddReportService
  ) { }

  async ngOnInit() {
    const token = localStorage.getItem('userToken');
    const headers = new HttpHeaders()
            .set('authorization', token);
    await this.httpClient.get('https://nameless-cove-75161.herokuapp.com/api/page/project-role',
    {
      headers
    })
    .subscribe(
      (response: ResponseObject)  => {
        this.dataProjectsName = response.data.project;
        this.dataRolesName = response.data.role;
        this.objectCard = [{
          projects: this.dataProjectsName,
          roles: this.dataRolesName,
        }];
      },
    error  => {
    }
    );
  }

  addCardProject() {
    this.objectCard.push({
      projects: this.dataProjectsName,
      roles: this.dataRolesName,
    });
  }

  selectProject(index) {
    console.log('index', index);
    this.selectedDataProject = this.addReportData.division[index].projectName;
    this.selectedDataRole = this.addReportData.division[index].roleName;

    console.log(this.addReportData);

    if(this.addReportData.division[index].task.length === 1) {
      this.addReportData.division[index].task[0].jobDesc = 
    } else {

    }
  }

  public showDetailFunction() {
    // console.log(this.addReportData.reportDate);
    if (this.addReportData.reportDate === '') {
      this.divisionAddReportData[0].projectName = this.addReportService.getSelectedProjectName();
      this.divisionAddReportData[0].roleName = this.addReportService.getSelectedRolesName();
      this.divisionAddReportData[0].task = this.taskData;
      this.addReportData = {
        reportDate: 'aa',
        division: this.divisionAddReportData
      };
      this.showDetail = true;
    } else {
      this.divisionAddReportData.push({
        projectName: this.addReportService.getSelectedProjectName(),
        roleName: this.addReportService.getSelectedRolesName(),
        task: this.taskData,
      });
    }

    console.log(this.addReportData);
  }
}

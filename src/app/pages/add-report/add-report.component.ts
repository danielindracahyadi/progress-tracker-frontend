import { AddReportService } from './add-report.service';
import { AppService } from './../../app.service';
import { Component, OnInit, Input, ComponentRef, ViewContainerRef, ViewChild, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardAddReportDropdownComponent } from 'src/app/components/card-add-report-dropdown/card-add-report-dropdown.component';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.sass']
})
export class AddReportComponent implements OnInit {
  @ViewChild('viewContainerRef', { static: true, read: ViewContainerRef }) VCR: ViewContainerRef;

  dataProjectName: any = [];
  dataRoles: any = [];

  index: number = 0;
  componentsReferences = [];

  showDetail = false;

  constructor( 
    private activatedRoutes: ActivatedRoute,
    private router: Router,
    private addReportService: AddReportService,
    private CFR: ComponentFactoryResolver,
    private httpClient: HttpClient
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
      (data: any)  => {
        this.dataProjectName = data.data.project;
        this.dataRoles = data.data.role;
      },
    error  => {
      console.log(error);
    }
    );

    this.addReportService.projectName.subscribe(
      () => {
        this.addReportService.rolesName.subscribe(
          () => {
            this.showDetail = true;
          }
        );
      }
    );
  }

  async addProject() {
    const componentFactory = this.CFR.resolveComponentFactory(CardAddReportDropdownComponent);
    const componentRef: ComponentRef<CardAddReportDropdownComponent> = this.VCR.createComponent(componentFactory);
    const currentComponent = componentRef.instance;
    const token = localStorage.getItem('userToken');
    const headers = new HttpHeaders()
            .set('authorization', token);
    await this.httpClient.get('https://nameless-cove-75161.herokuapp.com/api/page/project-role',
    {
      headers
    })
    .subscribe(
      (data: any)  => {
        componentRef.instance.dataProjectNameFinal = data.data.project;
        componentRef.instance.dataRolesFinal = data.data.role;
      },
    error  => {
      console.log(error);
    }
    );
    currentComponent.selfRef = currentComponent;
    currentComponent.index = ++this.index;
    currentComponent.compInteraction = this;
    await this.componentsReferences.push(componentRef);
  }
}

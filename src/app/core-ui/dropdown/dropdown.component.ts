import { AddReportService } from './../../pages/add-report/add-report.service';
import { AppService } from './../../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
declare var angular: any;

@Component({
  selector: 'core-ui-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class DropdownComponent implements OnInit {
  @Input() data: any;
  @Input() placeholder = '';
  @Input() classtouse = '';

  @Input() function: any;
  @Output() result : any;

  selectedData;

  constructor(
    private appService: AddReportService,
    private activatedRoutes: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnChanges(){
    console.log('data on changes', this.data);
    this.result = this.data.map((item) =>
    {
      return {
        id: item.id,
        name: item.projectname ? item.projectname : item.rolename,
      }
    })
  }

  ngOnInit() {
  }

  selected(){
    if (this.function === 'selectProjectName') {
      this.appService.setSelectedProjectName(this.selectedData);
    } else if (this.function === 'selectRolesName') {
      this.appService.setSelectedRolesName(this.selectedData);
    }
  }
}

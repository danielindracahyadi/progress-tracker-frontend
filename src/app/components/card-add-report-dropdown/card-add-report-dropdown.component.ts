import { AppService } from './../../app.service';
;import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface myinterface {

}

@Component({
  selector: 'card-add-report-dropdown',
  templateUrl: './card-add-report-dropdown.component.html',
  styleUrls: ['./card-add-report-dropdown.component.sass']
})
export class CardAddReportDropdownComponent implements OnInit {

  
  public index: number;
  public selfRef: CardAddReportDropdownComponent;

  public compInteraction: myinterface;

  @Input() dataProjectName = [];
  @Input() dataRoles = [];

  @Output() dataProjectNameFinal;
  @Output() dataRolesFinal;

  projectName = '';
  rolesName = '';

  a = [];
  b = [];

  constructor(
    private appService: AppService,
    private activatedRoutes: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    console.log("a", this.a);
    this.dataProjectNameFinal = this.dataProjectName;
    this.dataRolesFinal = this.dataRoles;
    if (this.a.length != 0 && this.b.length != 0){
      console.log("masuk sini")
      this.dataProjectNameFinal = this.a;
      this.dataRolesFinal = this.b;
    }
  }
}

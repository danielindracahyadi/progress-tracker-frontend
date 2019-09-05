import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-add-report-dropdown',
  templateUrl: './card-add-report-dropdown.component.html',
  styleUrls: ['./card-add-report-dropdown.component.sass']
})
export class CardAddReportDropdownComponent implements OnInit {

  @Input() dataProjectName = [];
  @Input() dataRoles = [];

  @Output() dataProjectNameFinal = [];
  @Output() dataRolesFinal = [];

  constructor() { }

  ngOnInit() {
    this.dataProjectNameFinal = this.dataProjectName;
    this.dataRolesFinal = this.dataRoles;
  }

}

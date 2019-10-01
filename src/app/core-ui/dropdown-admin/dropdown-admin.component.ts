import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
declare var angular: any;

@Component({
  selector: 'core-ui-dropdown-admin',
  templateUrl: './dropdown-admin.component.html',
  styleUrls: ['./dropdown-admin.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class DropdownAdminComponent implements OnInit {
  @Input() data: any[];
  @Input() classtouse = 'x';
  constructor() { }

  ngOnInit() {
  }

}
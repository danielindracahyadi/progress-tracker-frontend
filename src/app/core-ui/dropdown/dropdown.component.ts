import { Component,Input, OnInit, ViewEncapsulation, Output } from '@angular/core';
declare var angular: any;

@Component({
  selector: 'core-ui-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class DropdownComponent implements OnInit {
  @Input() data: any;
  @Output() result : any;

  constructor() { }

  ngOnInit() {
    this.result = this.data;
  }

}

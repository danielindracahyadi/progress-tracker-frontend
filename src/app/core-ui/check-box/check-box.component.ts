import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'core-ui-check-box',
  template:`
  <label class="{{classtouse}}">
    <input type="checkbox" (change)="show = !show" ng-model="show" />
    <span class="checkmark"></span>{{text}}
  </label>

  <div class="row container-fluid" *ngIf="show" id="divshow" >
    <input placeholder="ganti dengan slider disini"/>  
  </div>
  `,
  styles: [`
  .checkmark {
    position: absolute; top: 0; left: 0; height: 25px; width: 25px; background-color: #eee;
  }
  .checkmark:after {
    content: ""; position: absolute; display: none;
  }
  
  .cont-blue {
    display: block; position: relative; padding-left: 35px; margin-bottom: 12px; cursor: pointer;
    font-size: 22px; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;
  }
  .cont-blue input {
    position: absolute; opacity: 0; cursor: pointer; height: 0; width: 0;
  }
  .cont-blue:hover input ~ .checkmark {
    background-color: #ccc;
  }
  .cont-blue input:checked ~ .checkmark:after {
    display: block;
  }
  .cont-blue input:checked ~ .checkmark {
    background-color: #2196F3;
  }
  .cont-blue .checkmark:after {
    left: 9px; top: 5px; width: 5px; height: 10px; transform: rotate(45deg);
    border: solid white;
    border-width: 0 3px 3px 0; -webkit-transform: rotate(45deg); -ms-transform: rotate(45deg);
  }

  .cont-red {
    display: block; position: relative; padding-left: 35px; margin-bottom: 12px; cursor: pointer;
    font-size: 22px; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;
  }
  .cont-red input {
    position: absolute; opacity: 0; cursor: pointer; height: 0; width: 0;
  }
  .cont-red:hover input ~ .checkmark {
    background-color: #ccc;
  }
  .cont-red input:checked ~ .checkmark:after {
    display: block;
  }
  .cont-red input:checked ~ .checkmark {
    background-color: #FF3300;
  }
  .cont-red .checkmark:after {
    left: 9px; top: 5px; width: 5px; height: 10px; transform: rotate(45deg);
    border: solid black;
    border-width: 0 3px 3px 0; -webkit-transform: rotate(45deg); -ms-transform: rotate(45deg);
  }
  `],
  encapsulation: ViewEncapsulation.Native
})
export class CheckBoxComponent implements OnInit {

  opened = false;
  checked = false;
  @Input() text = 'Checkbox';
  @Input() classtouse = 'x';
  constructor() { }

  ngOnInit() {
  }

}

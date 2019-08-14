import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-button',
  template: '<button type="button" class={{classtouse}} (click)="countClicks()">{{text}}</button>',
  styles: [`

    .btn-blue-card {
      top: 448px;
      left: 64px;
      width: 308px;
      height: 28px;
      background: none;
      text-align: center;
      font: Semibold 12px/32px Source Sans Pro;
      letter-spacing: 0;
      color: #0871CE;
      border: 1px solid #0871CE;
      border-radius: 14px;
      opacity: 1;
    }
    .btn-blue-card:hover {
      color: #fff;
      background: #0871CE 0% 0% no-repeat padding-box;
      cursor: pointer;
    }

    .btn-blue-free {
      top: 684px;
      left: 40px;
      width: 356px;
      height: 28px;
      background: none;
      text-align: center;
      font: Semibold 12px/32px Source Sans Pro;
      letter-spacing: 0;
      color: #0871CE;
      border: 1px solid #0871CE;
      border-radius: 14px;
      opacity: 1;
    }
    .btn-blue-free:hover {
      color: #fff;
      background: #0871CE 0% 0% no-repeat padding-box;
      cursor: pointer;
    }

    .btn-green{
      top: 728px;
      left: 40px;
      width: 356px;
      height: 40px;
      background: #00CC9A 0% 0% no-repeat padding-box;
      box-shadow: 0px 0px 1px #000000;
      border: none;
      border-radius: 20px;
      text-align: center;
      font: Bold 18px/32px Source Sans Pro;
      letter-spacing: 0;
      color: #FFFFFF;
      opacity: 1;
    }
    
    .btn-new {
      top: 402px;
      left: 65px;
      width: 226px;
      height: 40px;
      background: transparent linear-gradient(100deg, #01B3E3 0%, #0871CE 100%) 0% 0% no-repeat padding-box;
      box-shadow: 0px 0px 1px #000000;
      border-radius: 20px;
      border: none;
      opacity: 1;
      text-align: left;
      font: Bold 18px/32px Source Sans Pro;
      letter-spacing: 0;
      color: #FFFFFF;
    }

  `],
  encapsulation: ViewEncapsulation.Native
})
export class CustomButtonComponent implements OnInit {

  @Input() text = 'Custom Button';
  @Input() classtouse = 'x';
  @Output() countChanged = new EventEmitter<number>();
  private totalClicks: number = 0;

  constructor() { }

  ngOnInit() {
  }

  countClicks() {
    this.totalClicks++;
    this.countChanged.emit(this.totalClicks);
    alert(this.text);
    alert(this.classtouse);
  }
}
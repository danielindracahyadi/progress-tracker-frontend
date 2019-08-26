import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'core-ui-button',
  template: '<button type="button" class={{classtouse}} (click)="countClicks()">{{text}}</button>',
  styles: [`
    .btn-blue{
      background: none;
      text-align: center;
      font: Semibold 12px/32px Source Sans Pro;
      letter-spacing: 0;
      color: #0871CE;
      border: 1px solid #0871CE;
      border-radius: 14px;
      text-align: center;
      font: Semibold 12px/32px Source Sans Pro;
      letter-spacing: 0;
      color: #0871CE;
      opacity: 1;
    }
    .btn-blue:hover {
      color: #fff;
      background: #0871CE 0% 0% no-repeat padding-box;
      cursor: pointer;
    }

    .btn-green{
      background: #00CC9A 0% 0% no-repeat padding-box;
      box-shadow: 0px 0px 1px #000000;
      border: none;
      border-radius: 20px;
      text-align: center;
      letter-spacing: 0;
      color: #FFFFFF;
      opacity: 1;
    }

    .btn-red{
      background: none;
      border: 1px solid #D54F4F;
      border-radius: 14px;
      text-align: center;
      font: Semibold 12px/32px Source Sans Pro;
      letter-spacing: 0;
      color: #D54F4F;
      opacity: 1;
    }
    .btn-red:hover {
      color: #fff;
      background: #D54F4F 0% 0% no-repeat padding-box;
      cursor: pointer;
    }

    .btn-tosca{
      background: none;
      border: 1px solid #4EC1E8;
      border-radius: 14px;
      text-align: center;
      font: Semibold 12px/32px Source Sans Pro;
      letter-spacing: 0;
      color: #4EC1E8;
      opacity: 1;
    }
    .btn-tosca:hover {
      color: #fff;
      background: #4EC1E8 0% 0% no-repeat padding-box;
      cursor: pointer;
    }

    .btn-inCard-ReportAdd {
      top: 448px;
      left: 64px;
      width: 308px;
      height: 28px;
    }

    .btn-inCard-HomeConfirm{
      top: 575px;
      left: 364px;
      width: 244px;
      height: 28px;
    }
    .btn-inCard-HomeCancel{
      top: 619px;
      left: 364px;
      width: 244px;
      height: 28px;
    }

    .btn-free-ReportAdd {
      top: 684px;
      left: 40px;
      width: 356px;
      height: 28px;
    }

    .btn-ReportSave{
      top: 728px;
      left: 40px;
      width: 356px;
      height: 40px;
      font: Bold 18px/32px Source Sans Pro; 
    }

    .btn-PopupConfirm{
      top: 536px;
      left: 504px;
      width: 272px;
      height: 40px;
      font: Bold 18px/32px Source Sans Pro;
    }
    .btn-PopupCancel{
      top: 496px;
      left: 504px;
      width: 272px;
      height: 28px;
      background:
    }
    .btn-popup-DeleteConfirm{
      top: 548px;
      left: 504px;
      width: 272px;
      height: 28px;
      color: #fff;
      background: #D54F4F 0% 0% no-repeat padding-box;
    }
    .btn-popup-DeleteCancel{
      top: 548px;
      left: 504px;
      width: 272px;
      height: 28px;
      background: none;
      color: #00CC9A;
      font: Semibold 12px/32px Source Sans Pro;
    }
    .btn-popup-ConfirmThanks{
      top: 502px;
      left: 504px;
      width: 272px;
      height: 28px;
      font: Semibold 12px/32px Source Sans Pro;
    }

    .btn-Home-new {
      top: 402px;
      left: 65px;
      width: 226px;
      height: 40px;
      background: transparent linear-gradient(100deg, #01B3E3 0%, #0871CE 100%) 0% 0% no-repeat padding-box;
      box-shadow: 0px 0px 1px #000000;
      border-radius: 20px;
      border: none;
      text-align: left;
      font: Bold 18px/32px Source Sans Pro;
      letter-spacing: 0;
      color: #FFFFFF;
      opacity: 1;
    }

    .btn-free-HomeLittle{
      top: 740px;
      left: 570px;
      width: 140px;
      height: 28px;
    }

    .btn-free-AddReportRole{
      top: 728px;
      left: 40px;
      width: 356px;
      height: 40px;
      background: transparent linear-gradient(96deg, #00EF6E 0%, #00CB9C 100%) 0% 0% no-repeat padding-box;
      box-shadow: 0px 0px 1px #000000;
      border-radius: 20px;
      border: none;
      text-align: left;
      font: Bold 18px/32px Source Sans Pro;
      letter-spacing: 0;
      color: #FFFFFF;
      opacity: 1;
    }

    .btn-free-save{
      top: 728px;
      left: 1080px;
      width: 160px;
      height: 40px;
      background: #0871CE 0% 0% no-repeat padding-box;
      box-shadow: 0px 0px 1px #000000;
      border-radius: 20px;
      border: none;
      text-align: center;
      font: Bold 18px/32px Source Sans Pro;
      letter-spacing: 0;
      color: #FFFFFF;
      opacity: 1;
    }

    .btn-inCard-HomeReport{
      top: 575px;
      left: 980px;
      width: 244px;
      height: 28px;
    }


    .btn-Signin{
      
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
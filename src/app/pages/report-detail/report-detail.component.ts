import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.sass']
})
export class ReportDetailComponent implements OnInit {
  @Input() dataDummy = "x";

  toggle0 = true; toggle1 = true;
  status = '';
  enableDisableRule0(job) {
    this.toggle0 = !this.toggle0;
    this.status = this.toggle0 ? 'Enable' : 'Disable';
  }
  enableDisableRule1(job) {
    this.toggle1 = !this.toggle1;
    this.status = this.toggle1 ? 'Enable' : 'Disable';
  }
  constructor() { }

  ngOnInit() {
  }

}

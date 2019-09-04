import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-report-task',
  templateUrl: './card-report-task.component.html',
  styleUrls: ['./card-report-task.component.sass']
})
export class CardReportTaskComponent implements OnInit {
  @Input() data = [];
  @Output() finalData = [];

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
    console.log("Data", this.data);
    this.finalData = this.data;
  }

}

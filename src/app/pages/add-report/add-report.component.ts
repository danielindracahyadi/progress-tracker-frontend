import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.sass']
})
export class AddReportComponent implements OnInit {

  @Input() dataProjectName = "x";
  @Input() dataRoles = "x";

  showDetail = false;

  constructor() { }

  ngOnInit() {
  }

  addProject(){
    this.showDetail = !this.showDetail;
  }

}

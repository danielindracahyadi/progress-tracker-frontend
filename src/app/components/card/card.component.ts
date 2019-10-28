import { AppService } from './../../app.service';
import { Component, OnInit, NgModule, Input } from '@angular/core';
import { MatCardModule } from '@angular/material';
import moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeReportService } from 'src/app/pages/home-report/home-report.service';

@Component({
  selector: 'component-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})

export class CardComponent implements OnInit {
  @Input() dataHome: any = {};

  constructor(
    private appService: AppService,
    private activatedRoutes: ActivatedRoute,
    private router: Router,
    private homeReportService: HomeReportService
  ) { }

  ngOnInit() {
    // const count = this.dataHome.data.length;
    // for (let q = 0; q < count; q++) {
    //   const testDate = this.dataHome.data[q].reportDate;
    //   const finalDate = moment(testDate).format('dddd, DD MMMM YYYY');
    //   this.dataHome.data[q].reportDate = finalDate;
    //   this.dataHome[0].data[q].reportDate = finalDate;
    //   this.dataHome.data[q].reportDate = finalDate;
    // }
  }

  addReport() {
    this.router.navigateByUrl('home/add-report');
  }

  reportDetail(reportdate: string) {
    this.router.navigateByUrl('home/report-detail');
    console.log(reportdate);
    //this.homeReportService.setReportdate(reportdate);
  }

  ngOnChanges() {
    console.log('cardComponent', this.dataHome);
  }
}

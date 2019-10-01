import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeReportService {

  reportdate: string;

  constructor() {}

  getReportdate() {
    return this.reportdate;
  }

  setReportdate(reportdate: string) {
    this.reportdate = reportdate;
  }
}
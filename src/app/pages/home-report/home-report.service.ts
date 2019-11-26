import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeReportService {
  reportdate: string;
  newdata: string;
  hasil: any;

  constructor() { }

  getReportdate() {
    return this.reportdate;
  }

  setReportdate(reportdate: string) {
    this.reportdate = reportdate;
  }

  // getHasil() {
  //   return this.hasil;
  // }

  // setHasil(hasil: any) {
  //   this.hasil = hasil;
  // }
}

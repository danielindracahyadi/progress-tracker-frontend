import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainDashboardService {

  constructor() { }
  private selectMainDashboardName: string = '';

  getSelectedMainDashboardName() {
    return this.selectMainDashboardName;
  }

  setSelectedMainDashboardName(selectMainDashboardName: string) {
    this.selectMainDashboardName = selectMainDashboardName;
  }
}

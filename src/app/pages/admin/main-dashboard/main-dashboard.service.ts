import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainDashboardService {

  constructor() { }
  private selectedMainDashboardCategory: string = '';
  private selectedID: number;
  private selectedFilter: string;
  private selectedDate: string;

  getSelectedMainDashboardCategory() {
    return this.selectedMainDashboardCategory;
  }
  setSelectedMainDashboardCategory(selectedMainDashboardCategory: string) {
    this.selectedMainDashboardCategory = selectedMainDashboardCategory;
  }

  getSelectedName() {
    return this.selectedName;
  }
  setSelectedName(selectedID: string) {
    this.selectedName = this.selectedName;
  }

  getSelectedID() {
    return this.selectedID;
  }
  setSelectedID(selectedID: string) {
    this.selectedID = selectedID;
  }

  getSelectedFilter() {
    return this.selectedFilter;
  }
  setSelectedFilter(selectedFilter: string) {
    this.selectedFilter = selectedFilter;
  }

  getSelectedDate() {
    return this.selectedDate;
  }
  setSelectedDate(selectedDate: string) {
    this.selectedDate = selectedDate;
  }
}

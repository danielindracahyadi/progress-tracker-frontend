import { Injectable, Output } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MainDashboardService {
  constructor() {}
  selectedMainDashboardCategory: string = "";
  selectedID: number;
  selectedFilter: string;
  selectedDate: string;
  selectedName: string = "";

  getSelectedMainDashboardCategory() {
    return this.selectedMainDashboardCategory;
  }
  setSelectedMainDashboardCategory(selectedMainDashboardCategory: string) {
    this.selectedMainDashboardCategory = selectedMainDashboardCategory;
  }

  getSelectedName() {
    return this.selectedName;
  }
  setSelectedName(selectedName: string) {
    this.selectedName = selectedName;
  }

  getSelectedID() {
    return this.selectedID;
  }
  setSelectedID(selectedID: number) {
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

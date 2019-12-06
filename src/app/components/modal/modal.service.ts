import { Injectable } from '@angular/core';
import { _fixedSizeVirtualScrollStrategyFactory } from '@angular/cdk/scrolling';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  category = '';
  theCurrentChosenID = '';

  constructor() { }

  setCategory(category) {
    this.category = category;
  }
  getCategory() {
    return this.category;
  }
  setTheCurrentChosenID(theCurrentChosenID) {
    this.theCurrentChosenID = theCurrentChosenID;
  }
  getTheCurrentChosenID() {
    return this.theCurrentChosenID;
  }
}

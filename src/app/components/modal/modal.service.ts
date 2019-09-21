import { Injectable } from '@angular/core';
import { _fixedSizeVirtualScrollStrategyFactory } from '@angular/cdk/scrolling';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  user = '';
  category = '';

  constructor() { }

  setUser(user: string)  {
    this.user = user;
  }
  getUser() {
    return this.user;
  }

  setCategory(category: string)  {
    this.category = category;
  }
  getCategory() {
    return this.category;
  }
}

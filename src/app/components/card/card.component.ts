import { Component, OnInit, NgModule, Input } from '@angular/core';
import { MatCardModule } from '@angular/material';
import moment from 'moment';

@Component({
  selector: 'component-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})

@Component({
  selector: 'component-cards',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})

export class CardComponent implements OnInit {
  @Input() data = [];
  @Input() dataHome = [];

  constructor() { }

  ngOnInit() {
    for(var q = 0; q< this.dataHome[0].data.length; q++)
    {
      var testDate = this.dataHome[0].data[q].reportDate;
      let finalDate = moment(testDate).format('dddd, DD MMMM YYYY');
      this.dataHome[0].data[q].reportDate = finalDate;
    }
  }
}

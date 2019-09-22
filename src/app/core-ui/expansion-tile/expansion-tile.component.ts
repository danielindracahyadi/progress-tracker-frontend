import { Component, OnInit, Input } from '@angular/core';
import { AppService } from './../../app.service';

@Component({
  selector: 'core-ui-expansion-tile',
  templateUrl: './expansion-tile.component.html',
  styleUrls: ['./expansion-tile.component.sass']
})
export class ExpansionTileComponent implements OnInit {
  showET = true;
  showP = true;
  showR = false;
  showU = false;

  @Input() text = '';
  constructor(
    private appService: AppService
  ) {}

  ngOnInit() {

    if (this.appService.getSelectedMainDashboardName() === 'User') {
      this.showET = false;
      this.showP = false;
      this.showR = false;
      this.showU = true;
    }
    if (this.appService.getSelectedMainDashboardName() === 'Project') {
      this.showP = true;
      this.showR = false;
      this.showU = false;
    }
    if (this.appService.getSelectedMainDashboardName() === 'Role') {
      this.showP = false;
      this.showR = true;
      this.showU = false;
    }
  }

}

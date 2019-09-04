import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {

  @Output() dummyCardReportTask = [
    {
      projectName : 'Dinas Kesehatan',
      role : 'UI/UX Designer',
      workTotal : '4'
    },
    {
      projectName : 'MacroAd',
      role : 'UI/UX Designer',
      workTotal : '168'
    }
  ];

  ngOnInit() {
  }
}

import { Component, OnInit,Input,Output } from '@angular/core';


@Component({
  selector: 'app-main-dashboard-time',
  templateUrl: './main-dashboard-time.component.html',
  styleUrls: ['./main-dashboard-time.component.sass']
})
export class MainDashboardTimeComponent implements OnInit {

  @Input() dataDummy: any;
  selectedData: any;

  @Output() dummyMainDashboardTime =[
    {
         date: 'Rabu, 19 Desember 2019',
         otherProjects: 2,
         projects: [
            {
               project: 'Back-end Engineer'
            },
            {
               project: 'Front-end Engineer'
            },
            {
               project: 'Project Manager'
            }
         ]
      },
      {
         date: 'Selasa, 20 Desember 2019',
         otherProjects: 2,
         projects: [
            {
               project: 'Back-end Engineer'
            },
            {
               project: 'Front-end Engineer'
            },
            {
               project: 'Project Manager'
            }
         ]
   },
   {
      date: 'Selasa, 21 Desember 2019',
      otherProjects: 2,
      projects: [
         {
            project: 'Back-end Engineer'
         },
         {
            project: 'Front-end Engineer'
         },
         {
            project: 'Project Manager'
         }
      ]
   },
   {
      date: 'Selasa, 22 Desember 2019',
      otherProjects: 2,
      projects: [
         {
            project: 'Back-end Engineer'
         },
         {
            project: 'Front-end Engineer'
         },
         {
            project: 'Project Manager'
         }
      ]
   },
   {
      date: 'Selasa, 20 Desember 2019',
      otherProjects: 2,
      projects: [
         {
            project: 'Back-end Engineer'
         },
         {
            project: 'Front-end Engineer'
         },
         {
            project: 'Project Manager'
         }
      ]
   },
   {
      date: 'Selasa, 20 Desember 2019',
      otherProjects: 2,
      projects: [
         {
            project: 'Back-end Engineer'
         },
         {
            project: 'Front-end Engineer'
         },
         {
            project: 'Project Manager'
         }
      ]
   },
   {
      date: 'Selasa, 21 Desember 2019',
      otherProjects: 2,
      projects: [
         {
            project: 'Back-end Engineer'
         },
         {
            project: 'Front-end Engineer'
         },
         {
            project: 'Project Manager'
         }
      ]
   },
   {
      date: 'Selasa, 22 Desember 2019',
      otherProjects: 2,
      projects: [
         {
            project: 'Back-end Engineer'
         },
         {
            project: 'Front-end Engineer'
         },
         {
            project: 'Project Manager'
         }
      ]
   },
   {
      date: 'Selasa, 20 Desember 2019',
      otherProjects: 2,
      projects: [
         {
            project: 'Back-end Engineer'
         },
         {
            project: 'Front-end Engineer'
         },
         {
            project: 'Project Manager'
         }
      ]
   },
   {
      date: 'Selasa, 20 Desember 2019',
      otherProjects: 2,
      projects: [
         {
            project: 'Back-end Engineer'
         },
         {
            project: 'Front-end Engineer'
         },
         {
            project: 'Project Manager'
         }
      ]
   },
   {
      date: 'Selasa, 21 Desember 2019',
      otherProjects: 2,
      projects: [
         {
            project: 'Back-end Engineer'
         },
         {
            project: 'Front-end Engineer'
         },
         {
            project: 'Project Manager'
         }
      ]
   },
   {
      date: 'Selasa, 22 Desember 2019',
      otherProjects: 2,
      projects: [
         {
            project: 'Back-end Engineer'
         },
         {
            project: 'Front-end Engineer'
         },
         {
            project: 'Project Manager'
         }
      ]
   }
 ];

  constructor() { }

  ngOnInit() {
  }
  change(data) {
    this.selectedData = [data];
  }

}

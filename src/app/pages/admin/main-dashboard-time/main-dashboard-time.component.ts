import { Component, OnInit,Input,Output } from '@angular/core';
import { TIMELINE } from '../../../constants/index';

@Component({
  selector: 'page-admin-main-dashboard-time',
  templateUrl: './main-dashboard-time.component.html',
  styleUrls: ['./main-dashboard-time.component.sass']
})
export class MainDashboardTimeComponent implements OnInit {

 timelines = TIMELINE;

//   @Output() dummyMainDashboardTime =[
//     {
//          date: '2019-12-19',
//          otherProjects: 2,
//          projects: [
//             {
//                project: 'Back-end Engineer'
//             },
//             {
//                project: 'Front-end Engineer'
//             },
//             {
//                project: 'Project Manager'
//             }
//          ]
//       },
//       {
//          date: '2019-12-20',
//          otherProjects: 2,
//          projects: [
//             {
//                project: 'Back-end Engineer'
//             },
//             {
//                project: 'Front-end Engineer'
//             },
//             {
//                project: 'Project Manager'
//             }
//          ]
//    },
//    {
//       date: '2019-12-21',
//       otherProjects: 2,
//       projects: [
//          {
//             project: 'Back-end Engineer'
//          },
//          {
//             project: 'Front-end Engineer'
//          },
//          {
//             project: 'Project Manager'
//          }
//       ]
//    },
//    {
//       date: '2019-12-22',
//       otherProjects: 2,
//       projects: [
//          {
//             project: 'Back-end Engineer'
//          },
//          {
//             project: 'Front-end Engineer'
//          },
//          {
//             project: 'Project Manager'
//          }
//       ]
//    },
//    {
//       date: '2019-12-20',
//       otherProjects: 2,
//       projects: [
//          {
//             project: 'Back-end Engineer'
//          },
//          {
//             project: 'Front-end Engineer'
//          },
//          {
//             project: 'Project Manager'
//          }
//       ]
//    },
//    {
//       date: '2019-12-21',
//       otherProjects: 2,
//       projects: [
//          {
//             project: 'Back-end Engineer'
//          },
//          {
//             project: 'Front-end Engineer'
//          },
//          {
//             project: 'Project Manager'
//          }
//       ]
//    },
//    {
//       date: '2019-12-21',
//       otherProjects: 2,
//       projects: [
//          {
//             project: 'Back-end Engineer'
//          },
//          {
//             project: 'Front-end Engineer'
//          },
//          {
//             project: 'Project Manager'
//          }
//       ]
//    },
//    {
//       date: '2019-12-22',
//       otherProjects: 2,
//       projects: [
//          {
//             project: 'Back-end Engineer'
//          },
//          {
//             project: 'Front-end Engineer'
//          },
//          {
//             project: 'Project Manager'
//          }
//       ]
//    },
//    {
//       date: '2019-12-20',
//       otherProjects: 2,
//       projects: [
//          {
//             project: 'Back-end Engineer'
//          },
//          {
//             project: 'Front-end Engineer'
//          },
//          {
//             project: 'Project Manager'
//          }
//       ]
//    },
//    {
//       date: '2019-12-20',
//       otherProjects: 2,
//       projects: [
//          {
//             project: 'Back-end Engineer'
//          },
//          {
//             project: 'Front-end Engineer'
//          },
//          {
//             project: 'Project Manager'
//          }
//       ]
//    },
//    {
//       date: '2019-12-21',
//       otherProjects: 2,
//       projects: [
//          {
//             project: 'Back-end Engineer'
//          },
//          {
//             project: 'Front-end Engineer'
//          },
//          {
//             project: 'Project Manager'
//          }
//       ]
//    },
//    {
//       date: '2019-12-22',
//       otherProjects: 2,
//       projects: [
//          {
//             project: 'Back-end Engineer'
//          },
//          {
//             project: 'Front-end Engineer'
//          },
//          {
//             project: 'Project Manager'
//          }
//       ]
//    }
//  ];

 onClick(){
    console.log("Card id Clicked!");
 }

  constructor() { }
  ngOnInit() {
   }

//   change(data) {
//     this.selectedData = [data];
//   }

}

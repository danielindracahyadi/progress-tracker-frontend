import { Component, OnInit, Input } from '@angular/core';
import { AppService } from './../../app.service';
import { MainDashboardService } from 'src/app/pages/admin/main-dashboard/main-dashboard.service';
import { MainDashboardComponent } from 'src/app/pages/admin/main-dashboard/main-dashboard.component';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/components/modal/modal.service';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'core-ui-expansion-tile',
  providers: [ModalComponent],
  templateUrl: './expansion-tile.component.html',
  styleUrls: ['./expansion-tile.component.sass']
})
export class ExpansionTileComponent implements OnInit {
  showLihatDetailRole = true;
  showProject = true;
  showReport = false;
  showUser = false;
  featureTambah = '';
  @Input() category = '';

  @Input() text = '';
  constructor(
    private appService: AppService,
    private mainDashboardService: MainDashboardService,
    private router: Router,
    private mainDashboard: MainDashboardComponent,
    private modalService: ModalService,
    private modalComponent: ModalComponent,
  ) { }

  ngOnInit() {
    this.featureTambah = this.mainDashboard.featureTambah;
    if (this.mainDashboard.selectedMainDashboardDropdown === 'User') {
      this.showLihatDetailRole = false;
      this.showProject = false;
      this.showReport = false;
      this.showUser = true;
    }
    if (this.mainDashboard.selectedMainDashboardDropdown === 'Project') {
      this.showProject = true;
      this.showReport = false;
      this.showUser = false;
    }
    if (this.mainDashboard.selectedMainDashboardDropdown === 'Role') {
      this.showProject = false;
      this.showReport = true;
      this.showUser = false;
    }
  }

  doDetail() {
    this.mainDashboardService.setSelectedID(this.mainDashboard.theCurrentChoosenId);
    this.mainDashboardService.setSelectedFilter(this.mainDashboard.theCurrentChoosenFilter);
    this.router.navigateByUrl('home-admin/main-dashboard-time');
  }

  doEdit() {
    this.modalService.setTheCurrentChosenID(this.mainDashboard.theCurrentChoosenId);

    this.mainDashboardService.setSelectedID(this.mainDashboard.theCurrentChoosenId);

    if (this.mainDashboard.selectedMainDashboardDropdown === '' || this.mainDashboard.selectedMainDashboardDropdown === 'Project') {
      this.modalComponent.openDialogAdminEditProject(this.category);
    } else if (this.mainDashboard.selectedMainDashboardDropdown === 'Role') {
      this.modalComponent.openDialogAdminEditRole(this.category);
    } else if (this.mainDashboard.selectedMainDashboardDropdown === 'User') {
      this.modalComponent.openDialogAdminEdit(this.category);
    }
  }

  doDelete() {
    this.mainDashboardService.setSelectedID(this.mainDashboard.theCurrentChoosenId);
    this.modalComponent.openDialogAdminDelete(this.category);
  }


}

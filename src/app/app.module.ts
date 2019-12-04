import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextViewComponent } from './core-ui/text-view/text-view.component';
import { TextInputComponent } from './core-ui/text-input/text-input.component';
import { ButtonComponent } from './core-ui/button/button.component';
import { DatepickerComponent } from './core-ui/datepicker/datepicker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRippleModule, MatInputModule, MatCardModule, MatDividerModule,
  MatExpansionModule, MatSelectModule, MatSidenavModule, MatDialogModule, MatProgressSpinnerModule, MatSliderModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatIconModule } from '@angular/material/icon';
import { DropdownComponent } from './core-ui/dropdown/dropdown.component';
import { LoginSceneComponent } from './pages/login-scene/login-scene.component';
import { CheckBoxComponent } from './core-ui/check-box/check-box.component';
import { Group1191Component } from './svg/group1191/group1191.component';
import { Group1192Component } from './svg/group1192/group1192.component';
import { UserReportDetailComponent } from './pages/report-detail/report-detail.component';
import { CardReportTitleComponent } from './components/card-report-title/card-report-title.component';
import { AddReportComponent } from './pages/add-report/add-report.component';
import { CardAddReportDropdownComponent } from './components/card-add-report-dropdown/card-add-report-dropdown.component';
import { CardAddReportButtonComponent } from './components/card-add-report-button/card-add-report-button.component';
import { CardAddReportDetailComponent } from './components/card-add-report-detail/card-add-report-detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardAddReportTaskComponent } from './components/card-add-report-task/card-add-report-task.component';
import { ExpansionTileComponent } from './core-ui/expansion-tile/expansion-tile.component';
import { MatListModule} from '@angular/material/list';
import { CardComponent } from './components/card/card.component';
import { HomeReportComponent } from './pages/home-report/home-report.component';
import { Group1172Component } from './svg/group1172/group1172.component';
import { AdminReportDetailComponent } from './pages/admin/report-detail/report-detail.component';
import { MainDashboardComponent } from './pages/admin/main-dashboard/main-dashboard.component';
import { MainDashboardTimeComponent } from './pages/admin/main-dashboard-time/main-dashboard-time.component';
import { Group1286Component } from './svg/group1286/group1286.component';
import { LoginAdminComponent } from './pages/admin/login-admin/login-admin.component';
import { ModalComponent } from './components/modal/modal.component';
import { Group1226Component } from './svg/group1226/group1226.component';
import { Group1225Component } from './svg/group1225/group1225.component';
import { ModalDataUserSubmitComponent } from './components/modal/modal-data-user-submit/modal-data-user-submit.component';
import { ModalDataUserDeleteComponent } from './components/modal/modal-data-user-delete/modal-data-user-delete.component';
import { ModalDataUserConfirmationComponent } from './components/modal/modal-data-user-confirmation/modal-data-user-confirmation.component';
import { Group1227Component } from './svg/group1227/group1227.component';
import { ModalDataAdminAddComponent } from './components/modal/modal-data-admin-add/modal-data-admin-add.component';
import { ModalDataAdminAddRoleComponent } from './components/modal/modal-data-admin-add-role/modal-data-admin-add-role.component';
import { ModalDataAdminAddProjectComponent } from './components/modal/modal-data-admin-add-project/modal-data-admin-add-project.component';
import { ModalDataAdminEditComponent } from './components/modal/modal-data-admin-edit/modal-data-admin-edit.component';
import { ModalDataAdminDeleteComponent } from './components/modal/modal-data-admin-delete/modal-data-admin-delete.component';
import { ButtonAdminComponent } from './core-ui/button-admin/button-admin.component';
import { LoginSceneModule } from './pages/login-scene/login-scene.module';
import { HeaderComponent } from './components/header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import { ArrowDownComponent } from './svg/arrow-down/arrow-down.component';
import { DropdownAdminComponent } from './core-ui/dropdown-admin/dropdown-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    TextViewComponent,
    TextInputComponent,
    ButtonComponent,
    DatepickerComponent,
    DropdownComponent,
    LoginSceneComponent,
    CheckBoxComponent,
    UserReportDetailComponent,
    CardReportTitleComponent,
    Group1191Component,
    Group1192Component,
    Group1225Component,
    Group1226Component,
    Group1227Component,
    DatepickerComponent,
    AddReportComponent,
    CardAddReportDropdownComponent,
    CardAddReportButtonComponent,
    CardAddReportDetailComponent,
    CardAddReportTaskComponent,
    CardComponent,
    HomeReportComponent,
    ExpansionTileComponent,
    AdminReportDetailComponent,
    Group1172Component,
    MainDashboardComponent,
    MainDashboardTimeComponent,
    Group1286Component,
    LoginAdminComponent,
    ModalComponent,
    ModalDataUserSubmitComponent,
    ModalDataUserDeleteComponent,
    ModalDataUserConfirmationComponent,
    ModalDataAdminAddComponent,
    ModalDataAdminAddRoleComponent,
    ModalDataAdminAddProjectComponent,
    ModalDataAdminEditComponent,
    ModalDataAdminDeleteComponent,
    ButtonAdminComponent,
    MainDashboardComponent,
    MainDashboardComponent,
    MainDashboardTimeComponent,
    HeaderComponent,
    ArrowDownComponent,
    DropdownAdminComponent
  ],
  exports: [
    AppComponent,
    TextViewComponent,
    TextInputComponent,
    ButtonComponent,
    DatepickerComponent,
    DropdownComponent,
    LoginSceneComponent,
    CheckBoxComponent,
    UserReportDetailComponent,
    CardReportTitleComponent,
    Group1191Component,
    Group1192Component,
    DatepickerComponent,
    AddReportComponent,
    CardAddReportDropdownComponent,
    CardAddReportButtonComponent,
    CardAddReportDetailComponent,
    CardAddReportTaskComponent,
    CardComponent,
    HomeReportComponent,
    ExpansionTileComponent,
    AdminReportDetailComponent,
    Group1172Component,
    MainDashboardComponent,
    MainDashboardTimeComponent,
    MatProgressSpinnerModule
  ],
  entryComponents: [
    CardAddReportDropdownComponent,
    ModalDataUserSubmitComponent,
    ModalDataUserDeleteComponent,
    ModalDataUserConfirmationComponent,
    ModalDataAdminAddComponent,
    ModalDataAdminAddProjectComponent,
    ModalDataAdminAddRoleComponent,
    ModalDataAdminEditComponent,
    ModalDataAdminDeleteComponent,
    ButtonAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRippleModule,
    MatMomentDateModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    LoginSceneModule,
    MatMenuModule,
    MatSliderModule
  ],
  providers: [MatDialogModule],

  bootstrap: [AppComponent]
})
export class AppModule {}

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
  MatExpansionModule, MatSelectModule, MatSidenavModule, MatListModule } from '@angular/material';
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
import { ModalComponent } from './components/modal/modal.component';
import { Group1226Component } from './svg/group1226/group1226.component';
import { Group1225Component } from './svg/group1225/group1225.component';
import { ModalDataUserSubmitComponent } from './components/modal/modal-data-user-submit/modal-data-user-submit.component';
import { ModalDataUserDeleteComponent } from './components/modal/modal-data-user-delete/modal-data-user-delete.component';
import { ModalDataUserConfirmationComponent } from './components/modal/modal-data-user-confirmation/modal-data-user-confirmation.component';
import { Group1227Component } from './svg/group1227/group1227.component';
import { ModalDataAdminAddComponent } from './components/modal/modal-data-admin-add/modal-data-admin-add.component';
import { ModalDataAdminEditComponent } from './components/modal/modal-data-admin-edit/modal-data-admin-edit.component';
import { ModalDataAdminDeleteComponent } from './components/modal/modal-data-admin-delete/modal-data-admin-delete.component';

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
    DatepickerComponent,
    AddReportComponent,
    CardAddReportDropdownComponent,
    CardAddReportButtonComponent,
    CardAddReportDetailComponent,
    CardAddReportTaskComponent,
    ModalComponent,
    ModalDataUserSubmitComponent,
    ModalDataUserDeleteComponent,
    Group1226Component,
    ModalDataUserConfirmationComponent,
    Group1227Component,
    Group1225Component,
    ModalDataAdminAddComponent,
    ModalDataAdminEditComponent,
    ModalDataAdminDeleteComponent,
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
    MatSidenavModule
  ],
  entryComponents: [
    ModalDataUserSubmitComponent,
    ModalDataUserDeleteComponent,
    ModalDataUserConfirmationComponent,
    ModalDataAdminAddComponent,
    ModalDataAdminEditComponent,
    ModalDataAdminDeleteComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { MatRippleModule, MatInputModule, MatCardModule, MatDividerModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatIconModule } from '@angular/material/icon';
import { DropdownComponent } from './core-ui/dropdown/dropdown.component';
import { CheckBoxComponent } from './core-ui/check-box/check-box.component';
import { ReportDetailComponent } from './pages/report-detail/report-detail.component';
import { CardReportTitleComponent } from './components/card-report-title/card-report-title.component';
import { CardReportTaskComponent } from './components/card-report-task/card-report-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TextViewComponent,
    TextInputComponent,
    ButtonComponent,
    DatepickerComponent,
    DropdownComponent,
    CheckBoxComponent,
    ReportDetailComponent,
    CardReportTitleComponent,
    CardReportTaskComponent
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
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

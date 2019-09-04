import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReportTaskComponent } from './card-report-task.component';

describe('CardReportTaskComponent', () => {
  let component: CardReportTaskComponent;
  let fixture: ComponentFixture<CardReportTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardReportTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardReportTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

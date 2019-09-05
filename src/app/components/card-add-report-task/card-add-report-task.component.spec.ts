import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAddReportTaskComponent } from './card-add-report-task.component';

describe('CardAddReportTaskComponent', () => {
  let component: CardAddReportTaskComponent;
  let fixture: ComponentFixture<CardAddReportTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAddReportTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAddReportTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

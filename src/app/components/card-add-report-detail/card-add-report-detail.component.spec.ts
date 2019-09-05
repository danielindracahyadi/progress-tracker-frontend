import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAddReportDetailComponent } from './card-add-report-detail.component';

describe('CardAddReportDetailComponent', () => {
  let component: CardAddReportDetailComponent;
  let fixture: ComponentFixture<CardAddReportDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAddReportDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAddReportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

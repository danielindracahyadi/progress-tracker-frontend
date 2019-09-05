import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAddReportButtonComponent } from './card-add-report-button.component';

describe('CardAddReportButtonComponent', () => {
  let component: CardAddReportButtonComponent;
  let fixture: ComponentFixture<CardAddReportButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAddReportButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAddReportButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

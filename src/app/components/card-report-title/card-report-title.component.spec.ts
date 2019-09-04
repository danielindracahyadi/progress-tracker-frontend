import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReportTitleComponent } from './card-report-title.component';

describe('CardReportTitleComponent', () => {
  let component: CardReportTitleComponent;
  let fixture: ComponentFixture<CardReportTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardReportTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardReportTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

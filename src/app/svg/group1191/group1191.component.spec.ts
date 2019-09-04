import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Group1191Component } from './group1191.component';

describe('Group1191Component', () => {
  let component: Group1191Component;
  let fixture: ComponentFixture<Group1191Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Group1191Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Group1191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

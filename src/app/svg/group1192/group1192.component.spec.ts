import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Group1192Component } from './group1192.component';

describe('Group1192Component', () => {
  let component: Group1192Component;
  let fixture: ComponentFixture<Group1192Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Group1192Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Group1192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

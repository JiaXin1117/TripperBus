/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdminSchedulesEditexistingComponent } from './admin-schedules-editexisting.component';

describe('AdminSchedulesEditexistingComponent', () => {
  let component: AdminSchedulesEditexistingComponent;
  let fixture: ComponentFixture<AdminSchedulesEditexistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSchedulesEditexistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSchedulesEditexistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

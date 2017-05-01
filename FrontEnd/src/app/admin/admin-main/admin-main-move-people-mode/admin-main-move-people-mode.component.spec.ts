/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdminMainMovePeopleModeComponent } from './admin-main-move-people-mode.component';

describe('AdminMainMovePeopleModeComponent', () => {
  let component: AdminMainMovePeopleModeComponent;
  let fixture: ComponentFixture<AdminMainMovePeopleModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMainMovePeopleModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMainMovePeopleModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMainSearchComponent } from './admin-main-search.component';

describe('AdminMainSearchComponent', () => {
  let component: AdminMainSearchComponent;
  let fixture: ComponentFixture<AdminMainSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMainSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMainSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

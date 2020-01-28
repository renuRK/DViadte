import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DViateAssignmentComponent } from './dviate-assignment.component';

describe('DViateAssignmentComponent', () => {
  let component: DViateAssignmentComponent;
  let fixture: ComponentFixture<DViateAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DViateAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DViateAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

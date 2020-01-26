import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionPointAssignmentComponent } from './decision-point-assignment.component';

describe('DecisionPointAssignmentComponent', () => {
  let component: DecisionPointAssignmentComponent;
  let fixture: ComponentFixture<DecisionPointAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecisionPointAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionPointAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

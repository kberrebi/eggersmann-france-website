import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksTurnComponent } from './works-turn.component';

describe('WorksTurnComponent', () => {
  let component: WorksTurnComponent;
  let fixture: ComponentFixture<WorksTurnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksTurnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

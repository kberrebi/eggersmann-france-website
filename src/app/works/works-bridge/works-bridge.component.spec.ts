import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksBridgeComponent } from './works-bridge.component';

describe('WorksBridgeComponent', () => {
  let component: WorksBridgeComponent;
  let fixture: ComponentFixture<WorksBridgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksBridgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksBridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

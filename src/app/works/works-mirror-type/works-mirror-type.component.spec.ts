import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksMirrorTypeComponent } from './works-mirror-type.component';

describe('WorksMirrorTypeComponent', () => {
  let component: WorksMirrorTypeComponent;
  let fixture: ComponentFixture<WorksMirrorTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksMirrorTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksMirrorTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

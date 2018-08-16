import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksBlackStripesComponent } from './works-black-stripes.component';

describe('WorksBlackStripesComponent', () => {
  let component: WorksBlackStripesComponent;
  let fixture: ComponentFixture<WorksBlackStripesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksBlackStripesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksBlackStripesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

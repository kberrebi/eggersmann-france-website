import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksIslandComponent } from './works-island.component';

describe('WorksIslandComponent', () => {
  let component: WorksIslandComponent;
  let fixture: ComponentFixture<WorksIslandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksIslandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksIslandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

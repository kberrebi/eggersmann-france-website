import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphiteComponent } from './graphite.component';

describe('GraphiteComponent', () => {
  let component: GraphiteComponent;
  let fixture: ComponentFixture<GraphiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

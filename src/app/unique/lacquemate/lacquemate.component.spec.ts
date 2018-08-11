import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LacquemateComponent } from './lacquemate.component';

describe('LacquemateComponent', () => {
  let component: LacquemateComponent;
  let fixture: ComponentFixture<LacquemateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LacquemateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LacquemateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

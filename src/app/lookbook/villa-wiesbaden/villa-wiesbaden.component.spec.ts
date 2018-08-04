import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaWiesbadenComponent } from './villa-wiesbaden.component';

describe('VillaWiesbadenComponent', () => {
  let component: VillaWiesbadenComponent;
  let fixture: ComponentFixture<VillaWiesbadenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillaWiesbadenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaWiesbadenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

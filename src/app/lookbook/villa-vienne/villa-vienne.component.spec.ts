import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaVienneComponent } from './villa-vienne.component';

describe('VillaVienneComponent', () => {
  let component: VillaVienneComponent;
  let fixture: ComponentFixture<VillaVienneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillaVienneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaVienneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

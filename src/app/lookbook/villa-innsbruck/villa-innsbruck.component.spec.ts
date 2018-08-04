import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaInnsbruckComponent } from './villa-innsbruck.component';

describe('VillaInnsbruckComponent', () => {
  let component: VillaInnsbruckComponent;
  let fixture: ComponentFixture<VillaInnsbruckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillaInnsbruckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaInnsbruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

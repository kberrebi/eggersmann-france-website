import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaHambourgComponent } from './villa-hambourg.component';

describe('VillaHambourgComponent', () => {
  let component: VillaHambourgComponent;
  let fixture: ComponentFixture<VillaHambourgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillaHambourgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaHambourgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

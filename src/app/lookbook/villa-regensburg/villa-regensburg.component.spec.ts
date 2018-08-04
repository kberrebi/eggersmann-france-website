import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaRegensburgComponent } from './villa-regensburg.component';

describe('VillaRegensburgComponent', () => {
  let component: VillaRegensburgComponent;
  let fixture: ComponentFixture<VillaRegensburgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillaRegensburgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaRegensburgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

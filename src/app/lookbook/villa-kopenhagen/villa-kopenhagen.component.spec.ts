import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaKopenhagenComponent } from './villa-kopenhagen.component';

describe('VillaKopenhagenComponent', () => {
  let component: VillaKopenhagenComponent;
  let fixture: ComponentFixture<VillaKopenhagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillaKopenhagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaKopenhagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaSalzburgComponent } from './villa-salzburg.component';

describe('VillaSalzburgComponent', () => {
  let component: VillaSalzburgComponent;
  let fixture: ComponentFixture<VillaSalzburgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillaSalzburgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaSalzburgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaCologneComponent } from './villa-cologne.component';

describe('VillaCologneComponent', () => {
  let component: VillaCologneComponent;
  let fixture: ComponentFixture<VillaCologneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillaCologneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaCologneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

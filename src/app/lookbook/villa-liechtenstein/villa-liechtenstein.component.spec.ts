import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaLiechtensteinComponent } from './villa-liechtenstein.component';

describe('VillaLiechtensteinComponent', () => {
  let component: VillaLiechtensteinComponent;
  let fixture: ComponentFixture<VillaLiechtensteinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillaLiechtensteinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaLiechtensteinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

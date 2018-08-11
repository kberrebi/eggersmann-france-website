import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeolaNeraComponent } from './beola-nera.component';

describe('BeolaNeraComponent', () => {
  let component: BeolaNeraComponent;
  let fixture: ComponentFixture<BeolaNeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeolaNeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeolaNeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

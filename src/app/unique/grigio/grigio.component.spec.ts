import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrigioComponent } from './grigio.component';

describe('GrigioComponent', () => {
  let component: GrigioComponent;
  let fixture: ComponentFixture<GrigioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrigioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrigioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

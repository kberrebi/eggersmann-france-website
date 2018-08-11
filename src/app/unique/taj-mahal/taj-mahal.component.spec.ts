import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TajMahalComponent } from './taj-mahal.component';

describe('TajMahalComponent', () => {
  let component: TajMahalComponent;
  let fixture: ComponentFixture<TajMahalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TajMahalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TajMahalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

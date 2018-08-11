import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PietraVivaComponent } from './pietra-viva.component';

describe('PietraVivaComponent', () => {
  let component: PietraVivaComponent;
  let fixture: ComponentFixture<PietraVivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PietraVivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PietraVivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

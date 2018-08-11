import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilverTouchComponent } from './silver-touch.component';

describe('SilverTouchComponent', () => {
  let component: SilverTouchComponent;
  let fixture: ComponentFixture<SilverTouchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilverTouchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilverTouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

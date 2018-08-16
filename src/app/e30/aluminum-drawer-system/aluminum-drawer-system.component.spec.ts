import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AluminumDrawerSystemComponent } from './aluminum-drawer-system.component';

describe('AluminumDrawerSystemComponent', () => {
  let component: AluminumDrawerSystemComponent;
  let fixture: ComponentFixture<AluminumDrawerSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AluminumDrawerSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AluminumDrawerSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

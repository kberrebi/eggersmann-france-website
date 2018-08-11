import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegantbrownComponent } from './elegantbrown.component';

describe('ElegantbrownComponent', () => {
  let component: ElegantbrownComponent;
  let fixture: ComponentFixture<ElegantbrownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElegantbrownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElegantbrownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

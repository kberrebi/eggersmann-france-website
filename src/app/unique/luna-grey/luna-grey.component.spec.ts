import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunaGreyComponent } from './luna-grey.component';

describe('LunaGreyComponent', () => {
  let component: LunaGreyComponent;
  let fixture: ComponentFixture<LunaGreyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunaGreyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunaGreyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

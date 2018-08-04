import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoftHambourgComponent } from './loft-hambourg.component';

describe('LoftHambourgComponent', () => {
  let component: LoftHambourgComponent;
  let fixture: ComponentFixture<LoftHambourgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoftHambourgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoftHambourgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

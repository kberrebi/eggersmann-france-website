import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartementHambourgComponent } from './appartement-hambourg.component';

describe('AppartementHambourgComponent', () => {
  let component: AppartementHambourgComponent;
  let fixture: ComponentFixture<AppartementHambourgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppartementHambourgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppartementHambourgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

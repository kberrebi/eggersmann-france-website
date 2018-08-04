import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonHambourgComponent } from './maison-hambourg.component';

describe('MaisonHambourgComponent', () => {
  let component: MaisonHambourgComponent;
  let fixture: ComponentFixture<MaisonHambourgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisonHambourgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisonHambourgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

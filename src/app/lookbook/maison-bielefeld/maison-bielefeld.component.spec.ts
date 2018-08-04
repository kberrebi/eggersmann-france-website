import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonBielefeldComponent } from './maison-bielefeld.component';

describe('MaisonBielefeldComponent', () => {
  let component: MaisonBielefeldComponent;
  let fixture: ComponentFixture<MaisonBielefeldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisonBielefeldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisonBielefeldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

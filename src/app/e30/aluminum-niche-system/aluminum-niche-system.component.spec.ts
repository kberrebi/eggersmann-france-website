import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AluminumNicheSystemComponent } from './aluminum-niche-system.component';

describe('AluminumNicheSystemComponent', () => {
  let component: AluminumNicheSystemComponent;
  let fixture: ComponentFixture<AluminumNicheSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AluminumNicheSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AluminumNicheSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

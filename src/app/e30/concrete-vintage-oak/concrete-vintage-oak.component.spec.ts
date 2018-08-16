import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcreteVintageOakComponent } from './concrete-vintage-oak.component';

describe('ConcreteVintageOakComponent', () => {
  let component: ConcreteVintageOakComponent;
  let fixture: ComponentFixture<ConcreteVintageOakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcreteVintageOakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcreteVintageOakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

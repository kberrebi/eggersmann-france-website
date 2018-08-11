import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabescatoComponent } from './arabescato.component';

describe('ArabescatoComponent', () => {
  let component: ArabescatoComponent;
  let fixture: ComponentFixture<ArabescatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArabescatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArabescatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

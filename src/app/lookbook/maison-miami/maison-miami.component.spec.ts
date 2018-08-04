import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonMiamiComponent } from './maison-miami.component';

describe('MaisonMiamiComponent', () => {
  let component: MaisonMiamiComponent;
  let fixture: ComponentFixture<MaisonMiamiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisonMiamiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisonMiamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

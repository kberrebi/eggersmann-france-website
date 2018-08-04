import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonHelsinkiComponent } from './maison-helsinki.component';

describe('MaisonHelsinkiComponent', () => {
  let component: MaisonHelsinkiComponent;
  let fixture: ComponentFixture<MaisonHelsinkiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisonHelsinkiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisonHelsinkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

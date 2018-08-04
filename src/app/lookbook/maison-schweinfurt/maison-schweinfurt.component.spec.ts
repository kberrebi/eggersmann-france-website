import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonSchweinfurtComponent } from './maison-schweinfurt.component';

describe('MaisonSchweinfurtComponent', () => {
  let component: MaisonSchweinfurtComponent;
  let fixture: ComponentFixture<MaisonSchweinfurtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisonSchweinfurtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisonSchweinfurtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

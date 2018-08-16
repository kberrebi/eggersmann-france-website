import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartzWalnutComponent } from './quartz-walnut.component';

describe('QuartzWalnutComponent', () => {
  let component: QuartzWalnutComponent;
  let fixture: ComponentFixture<QuartzWalnutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartzWalnutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartzWalnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

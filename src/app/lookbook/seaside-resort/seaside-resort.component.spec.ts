import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasideResortComponent } from './seaside-resort.component';

describe('SeasideResortComponent', () => {
  let component: SeasideResortComponent;
  let fixture: ComponentFixture<SeasideResortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasideResortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasideResortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

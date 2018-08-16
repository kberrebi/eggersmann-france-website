import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AluminumQuartziteComponent } from './aluminum-quartzite.component';

describe('AluminumQuartziteComponent', () => {
  let component: AluminumQuartziteComponent;
  let fixture: ComponentFixture<AluminumQuartziteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AluminumQuartziteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AluminumQuartziteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

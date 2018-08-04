import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonCopenhagueComponent } from './maison-copenhague.component';

describe('MaisonCopenhagueComponent', () => {
  let component: MaisonCopenhagueComponent;
  let fixture: ComponentFixture<MaisonCopenhagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisonCopenhagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisonCopenhagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonHeidenheimComponent } from './maison-heidenheim.component';

describe('MaisonHeidenheimComponent', () => {
  let component: MaisonHeidenheimComponent;
  let fixture: ComponentFixture<MaisonHeidenheimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisonHeidenheimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisonHeidenheimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

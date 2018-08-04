import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonDuesseldorfComponent } from './maison-duesseldorf.component';

describe('MaisonDuesseldorfComponent', () => {
  let component: MaisonDuesseldorfComponent;
  let fixture: ComponentFixture<MaisonDuesseldorfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisonDuesseldorfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisonDuesseldorfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

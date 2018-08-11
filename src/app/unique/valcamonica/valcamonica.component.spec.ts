import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValcamonicaComponent } from './valcamonica.component';

describe('ValcamonicaComponent', () => {
  let component: ValcamonicaComponent;
  let fixture: ComponentFixture<ValcamonicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValcamonicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValcamonicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

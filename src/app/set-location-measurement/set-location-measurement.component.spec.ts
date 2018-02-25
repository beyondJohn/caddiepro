import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetLocationMeasurementComponent } from './set-location-measurement.component';

describe('SetLocationMeasurementComponent', () => {
  let component: SetLocationMeasurementComponent;
  let fixture: ComponentFixture<SetLocationMeasurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetLocationMeasurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetLocationMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverCommonNavComponent } from './driver-common-nav.component';

describe('DriverCommonNavComponent', () => {
  let component: DriverCommonNavComponent;
  let fixture: ComponentFixture<DriverCommonNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriverCommonNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverCommonNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

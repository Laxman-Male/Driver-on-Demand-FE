import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameScreenComponent } from './name-screen.component';

describe('NameScreenComponent', () => {
  let component: NameScreenComponent;
  let fixture: ComponentFixture<NameScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

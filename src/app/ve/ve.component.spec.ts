import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeComponent } from './ve.component';

describe('VeComponent', () => {
  let component: VeComponent;
  let fixture: ComponentFixture<VeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeComponent]
    });
    fixture = TestBed.createComponent(VeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

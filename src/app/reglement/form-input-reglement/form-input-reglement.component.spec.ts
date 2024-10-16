import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputReglementComponent } from './form-input-reglement.component';

describe('FormInputReglementComponent', () => {
  let component: FormInputReglementComponent;
  let fixture: ComponentFixture<FormInputReglementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormInputReglementComponent]
    });
    fixture = TestBed.createComponent(FormInputReglementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

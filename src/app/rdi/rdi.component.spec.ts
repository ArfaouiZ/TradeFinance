import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdiComponent } from './rdi.component';

describe('RdiComponent', () => {
  let component: RdiComponent;
  let fixture: ComponentFixture<RdiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RdiComponent]
    });
    fixture = TestBed.createComponent(RdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

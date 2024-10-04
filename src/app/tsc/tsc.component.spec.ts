import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TscComponent } from './tsc.component';

describe('TscComponent', () => {
  let component: TscComponent;
  let fixture: ComponentFixture<TscComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TscComponent]
    });
    fixture = TestBed.createComponent(TscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

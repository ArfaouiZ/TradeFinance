import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradisComponent } from './tradis.component';

describe('TradisComponent', () => {
  let component: TradisComponent;
  let fixture: ComponentFixture<TradisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradisComponent]
    });
    fixture = TestBed.createComponent(TradisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityTypeComponent } from './quantity-type.component';

describe('QuantityTypeComponent', () => {
  let component: QuantityTypeComponent;
  let fixture: ComponentFixture<QuantityTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantityTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

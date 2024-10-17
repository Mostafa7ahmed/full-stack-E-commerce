import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonepaymentComponent } from './donepayment.component';

describe('DonepaymentComponent', () => {
  let component: DonepaymentComponent;
  let fixture: ComponentFixture<DonepaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DonepaymentComponent]
    });
    fixture = TestBed.createComponent(DonepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

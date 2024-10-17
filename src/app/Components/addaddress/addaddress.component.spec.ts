import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaddressComponent } from './addaddress.component';

describe('AddaddressComponent', () => {
  let component: AddaddressComponent;
  let fixture: ComponentFixture<AddaddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddaddressComponent]
    });
    fixture = TestBed.createComponent(AddaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

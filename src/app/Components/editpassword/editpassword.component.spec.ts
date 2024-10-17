import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpasswordComponent } from './editpassword.component';

describe('EditpasswordComponent', () => {
  let component: EditpasswordComponent;
  let fixture: ComponentFixture<EditpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EditpasswordComponent]
    });
    fixture = TestBed.createComponent(EditpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

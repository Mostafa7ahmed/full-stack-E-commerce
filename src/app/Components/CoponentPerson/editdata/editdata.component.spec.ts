import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdataComponent } from './editdata.component';

describe('EditdataComponent', () => {
  let component: EditdataComponent;
  let fixture: ComponentFixture<EditdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EditdataComponent]
    });
    fixture = TestBed.createComponent(EditdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

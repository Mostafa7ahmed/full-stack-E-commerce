import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdataComponent } from './viewdata.component';

describe('ViewdataComponent', () => {
  let component: ViewdataComponent;
  let fixture: ComponentFixture<ViewdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ViewdataComponent]
    });
    fixture = TestBed.createComponent(ViewdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadCopmComponent } from './load-copm.component';

describe('LoadCopmComponent', () => {
  let component: LoadCopmComponent;
  let fixture: ComponentFixture<LoadCopmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoadCopmComponent]
    });
    fixture = TestBed.createComponent(LoadCopmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

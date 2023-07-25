import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateWidgetComponent } from './date-widget.component';

describe('DateWidgetComponent', () => {
  let component: DateWidgetComponent;
  let fixture: ComponentFixture<DateWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateWidgetComponent]
    });
    fixture = TestBed.createComponent(DateWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

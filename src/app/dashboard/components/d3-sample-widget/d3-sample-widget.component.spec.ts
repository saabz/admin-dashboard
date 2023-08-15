import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3SampleWidgetComponent } from './d3-sample-widget.component';

describe('D3SampleWidgetComponent', () => {
  let component: D3SampleWidgetComponent;
  let fixture: ComponentFixture<D3SampleWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [D3SampleWidgetComponent]
    });
    fixture = TestBed.createComponent(D3SampleWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

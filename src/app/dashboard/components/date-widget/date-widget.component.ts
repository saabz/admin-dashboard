import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-date-widget',
  templateUrl: './date-widget.component.html',
  styleUrls: ['./date-widget.component.scss'],
})
export class DateWidgetComponent {
  public currentDate: Date;

  constructor() {
    this.currentDate = new Date();
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-time-widget',
  templateUrl: './time-widget.component.html',
  styleUrls: ['./time-widget.component.scss'],
})
export class TimeWidgetComponent implements OnInit {
  public currentTime: Date;

  constructor() {
    this.currentTime = new Date();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DateWidgetComponent } from './components/date-widget/date-widget.component';
import { TimeWidgetComponent } from './components/time-widget/time-widget.component';
import { GridstackComponent, GridstackModule } from 'gridstack/dist/angular';

@NgModule({
  declarations: [HomeComponent, DateWidgetComponent, TimeWidgetComponent],
  imports: [CommonModule, DashboardRoutingModule, GridstackModule],
})
export class DashboardModule {
  constructor() {
    GridstackComponent.addComponentToSelectorType([
      DateWidgetComponent,
      TimeWidgetComponent,
    ]);
  }
}

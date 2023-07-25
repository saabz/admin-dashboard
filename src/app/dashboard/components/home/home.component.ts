import { Component } from '@angular/core';
import { GridStackOptions, GridStackWidget } from 'gridstack';
import { nodesCB } from 'gridstack/dist/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public items: GridStackWidget[] = [
    { h: 3, w: 6, id: '1' },
    { h: 3, w: 6, id: '2' },
    { h: 3, w: 6, id: '3' },
  ];
  public gridOptions: GridStackOptions = {
    // margin: 5,
    // // float: true,
    // minRow: 1,
    disableDrag: false,
    disableResize: true,
  };

  constructor() {}

  public onChange(data: nodesCB) {
    // TODO: update our TEMPLATE list to match ?
    // NOTE: no need for dynamic as we can always use grid.save() to get latest layout, or grid.engine.nodes
    console.log('change ', data.nodes.length > 1 ? data.nodes : data.nodes[0]);
  }
  // ngFor unique node id to have correct match between our items used and GS
  public identify(index: number, w: GridStackWidget) {
    return w.id; // or use index if no id is set and you only modify at the end...
  }
}

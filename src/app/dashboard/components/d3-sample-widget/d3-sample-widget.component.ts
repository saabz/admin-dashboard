import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { tallBuildingsData } from '../../data/d3-data';

@Component({
  selector: 'dashboard-d3-sample-widget',
  templateUrl: './d3-sample-widget.component.html',
  styleUrls: ['./d3-sample-widget.component.scss'],
})
export class D3SampleWidgetComponent implements OnInit {
  private _svg: any;
  private _rectData = tallBuildingsData;
  private _rectBarWidth = 40;

  public ngOnInit(): void {
    this._svg = this._setUpSvg();
    // this._drawRectangle();
    this._drawBuildings();
  }

  private _setUpSvg() {
    const svg = d3
      .select('#d3-container')
      .append('svg')
      .attr('width', 300)
      .attr('height', 300)
      .attr('fill', 'white');
    svg
      .append('rect')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('fill', 'white');
    return svg;
  }

  private _drawBuildings() {
    const buildings = this._svg.selectAll('rect').data(this._rectData);

    buildings
      .enter()
      .append('rect')
      .attr('x', (d: any, i: number) => {
        const xPos = (i - 1) * (this._rectBarWidth + 10);
        return xPos;
      })
      .attr('y', 0)
      .attr('width', this._rectBarWidth)
      .attr('height', (d: any, i: number) => {
        return d.height;
      })
      .attr('fill', 'blue');
  }

  private _drawRectangle() {
    this._svg
      .append('rect')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('height', 250)
      .attr('width', 50)
      .attr('fill', 'red');
  }

  private _drawCircle() {
    this._svg
      .append('circle')
      .attr('cx', 150)
      .attr('cy', 150)
      .attr('r', 100)
      .attr('fill', 'red');
  }
}

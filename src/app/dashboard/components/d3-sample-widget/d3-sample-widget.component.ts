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
  private margin = { LEFT: 100, RIGHT: 10, TOP: 10, BOTTOM: 100 };
  private width = 600 - this.margin.LEFT - this.margin.RIGHT;
  private height = 380 - this.margin.BOTTOM - this.margin.TOP;

  public ngOnInit(): void {
    this._svg = this._setUpSvg();
    // this._drawRectangle();
    this._drawBuildings();
  }

  private _setUpSvg() {
    const svg = d3
      .select('#d3-container')
      .append('svg')
      .attr('width', this.width + this.margin.LEFT + this.margin.RIGHT)
      .attr('height', this.height + this.margin.BOTTOM + this.margin.TOP)
      .attr('fill', 'white');
    return svg;
  }

  private _drawBuildings() {
    const g = this._svg
      .append('g')
      .attr('transform', `translate(${this.margin.LEFT}, ${this.margin.TOP})`);

    // X Axis Label
    g.append('text')
      .attr('class', 'x axis-label')
      .attr('x', this.width / 2)
      .attr('y', this.height + 80)
      .attr('fill', 'black')
      .attr('text-anchor', 'middle')
      .attr('font-size', '20px')
      .text('Worlds tallest buildings');

    // X Axis Label
    g.append('text')
      .attr('class', 'y axis-label')
      .attr('x', -(this.height / 2))
      .attr('y', -60)
      .attr('fill', 'black')
      .attr('text-anchor', 'middle')
      .attr('font-size', '20px')
      .attr('transform', 'rotate(-90)')
      .text('Height (m)');

    const x = d3
      .scaleBand()
      .domain(this._rectData.map((x) => x.name))
      .range([0, this.width])
      .paddingInner(0.2)
      .paddingOuter(0.2);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(this._rectData, (d) => d.height) as number])
      .range([this.height, 0]);

    const xAxisCall = d3.axisBottom(x);
    g.append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0, ${this.height})`)
      .call(xAxisCall)
      .selectAll('text')
      .attr('x', '-7')
      .attr('text-anchor', 'end')
      .attr('transform', 'rotate(-40)');

    const yAxisCall = d3
      .axisLeft(y)
      .ticks(3)
      .tickFormat((d) => d + ' m');

    g.append('g').attr('class', 'y axis').call(yAxisCall);

    // buildings
    const buildings = g.selectAll('rect').data(this._rectData);

    buildings
      .enter()
      .append('rect')
      .attr('x', (d: any) => x(d.name))
      .attr('y', (d: any) => y(d.height))
      .attr('width', x.bandwidth)
      .attr('height', (d: any) => this.height - y(d.height))
      .attr('fill', 'grey');
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

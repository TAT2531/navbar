import { Component, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Chart, ChartType, ChartData, ChartOptions, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-chart-wrapper',
  template: '<canvas #chartCanvas></canvas>',
  styles: [`
    :host { display: block; width: 100%; height: 100%; }
    canvas { width: 100%!important; height: 100%!important; }
  `],
  standalone: true
})
export class ChartWrapperComponent implements AfterViewInit, OnDestroy {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  @Input() type!: ChartType;
  @Input() data!: ChartData;
  @Input() options!: ChartOptions;
  private chart!: Chart;

  constructor() {
    Chart.register(...registerables, ChartDataLabels);
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  private createChart(): void {
    if (!this.chartCanvas?.nativeElement) return;
    
    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: this.type,
      data: this.data,
      options: this.options
    });
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
// src/app/components/chart-wrapper/chart-wrapper.component.ts
import { Component, Input, ViewChild, ElementRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { Chart, ChartType, registerables } from 'chart.js';

@Component({
  selector: 'app-chart-wrapper',
  template: '<canvas #chartCanvas></canvas>',
  styles: [`
    :host { display: block; width: 100%; height: 100%; }
    canvas { width: 100%!important; height: 100%!important; }
  `],
  standalone: true
})
export class ChartWrapperComponent implements AfterViewInit, OnChanges {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  @Input() type: ChartType = 'pie';
  @Input() data: any;
  @Input() options: any;
  private chart: Chart | undefined;

  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.chart) {
      this.chart.destroy();
      this.createChart();
    }
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
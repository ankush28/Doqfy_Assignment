import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDateRangePicker, MatDatepicker } from '@angular/material/datepicker';
import * as moment from 'moment';
import * as _moment from 'moment';
import { Moment } from 'moment';
import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexPlotOptions, ApexResponsive, ChartComponent } from 'ng-apexcharts';



export interface ChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],

  
})
export class OrderDetailsComponent {
  private myChart: any = null;
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  @ViewChild('picker') dateRangePicker!: MatDateRangePicker<any>;

  openCalendar() {
    this.dateRangePicker.open();
  }
  date = new FormControl(moment());

  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }
  

  //@ts-ignore
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions!: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [10,20,20,50],
      chart: {
        width: 250,
        type: "donut"
      },
      labels: ["Signed", "Pending", "Expired", "Initiated"],


      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800']
          },
        },
      ],
      
    };
  }
}
  

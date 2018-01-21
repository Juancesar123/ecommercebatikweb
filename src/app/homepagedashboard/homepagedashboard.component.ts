import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-homepagedashboard',
  templateUrl: './homepagedashboard.component.html',
  styleUrls: ['./homepagedashboard.component.css']
})
export class HomepagedashboardComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Laporan Penjualan'
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Line 1',
      data: [1, 2, 3]
    }]
  });
  constructor() { }

  ngOnInit() {
  }

}

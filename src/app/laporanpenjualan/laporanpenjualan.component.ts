import { LaporanpenjualanService } from './../laporanpenjualan.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-laporanpenjualan',
  templateUrl: './laporanpenjualan.component.html',
  styleUrls: ['./laporanpenjualan.component.css'],
  providers:[LaporanpenjualanService]
})
export class LaporanpenjualanComponent implements OnInit {
  chart:Chart;
  cari:String;  
  constructor(public laporanpenjualanService: LaporanpenjualanService) { }

  ngOnInit() {
    this.GetDataPenjualan();
  }
  GetDataPenjualan(){
    this.laporanpenjualanService.GetDataPenjualan().subscribe(val =>{
      this.chart = new Chart({
        chart: {
          type: 'column'
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
    })
  }
  FilterDataDate(){
    let tanggal = this.cari;
    this.laporanpenjualanService.GetDataFilter(tanggal).subscribe(val =>{
        console.log(val);
    })
  }

}

import { ChartModule } from 'angular-highcharts';
import { LaporanpenjualanComponent } from './laporanpenjualan.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { LaporanPenjualanrouter } from './LaporanPenjualanRoute.route';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    DataTablesModule,
    LaporanPenjualanrouter,
    ChartModule
  ],
  declarations: [LaporanpenjualanComponent]
})
export class LaporanPenjualanModule { }

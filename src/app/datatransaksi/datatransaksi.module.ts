import { DatatransaksiComponent } from './datatransaksi.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { DatatransaksiRoute } from './datatransaksi.route';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    DataTablesModule,
    DatatransaksiRoute
  ],
  declarations: [DatatransaksiComponent]
})
export class DataTransaksiModule { }

import { HistorytransaksiComponent } from './historytransaksi.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { HistoryTransaksiRoute } from './historytransaksi.route';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    DataTablesModule,
    HistoryTransaksiRoute
  ],
  declarations: [HistorytransaksiComponent]
})
export class HistoryTransaksiModule { }

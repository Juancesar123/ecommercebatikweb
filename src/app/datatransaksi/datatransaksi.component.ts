import { LaporanpenjualanService } from './../laporanpenjualan.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatransaksi',
  templateUrl: './datatransaksi.component.html',
  styleUrls: ['./datatransaksi.component.css'],
  providers:[LaporanpenjualanService]
})
export class DatatransaksiComponent implements OnInit {
  datalaporantransaksi;
  constructor(public transaksiService:LaporanpenjualanService) { }

  ngOnInit() {
  }
  GetDataTransaksi(){
    this.transaksiService.GetdataTransaksi().subscribe((res) => this.datalaporantransaksi);
  }
}

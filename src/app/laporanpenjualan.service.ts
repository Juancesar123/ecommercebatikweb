import { Configendpoint } from './configendpoint';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { Response } from '@angular/http/src/static_response';
@Injectable()
export class LaporanpenjualanService {

  constructor(public http: Http) { }
  GetDataPenjualan():Observable<any[]>{
    return this.http.get(Configendpoint.endpointapi+'/datatransaksi?statustransaksi=success').map(response => response.json());
  }
  GetDataFilter(tanggal){
    return this.http.get(Configendpoint.endpointapi+'/datatransaksi?tanggal='+tanggal).map(response => response.json());
  }
  GetdataTransaksi(){
    return this.http.get(Configendpoint.endpointapi + '/datatransaksi').map(res =>res.json());
  }
}

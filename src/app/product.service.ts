import { Configendpoint } from './configendpoint';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
@Injectable()
export class ProductService {
  handleError: any;

  constructor(public http:Http) { }
  getDataProduct():Observable<any[]>{
    return this.http.get(Configendpoint.endpointapi+'/productlist').map(response => response.json());
  }
  SaveProduct(data,fileToUpload: File){
    //const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    formData.append('gambar', fileToUpload, fileToUpload.name);
    formData.append('gambar', 'img/'+fileToUpload.name);
    formData.append('namabarang', data.namabarang);
    formData.append('warna', data.warna);
    formData.append('ukuran', data.ukuran);
    formData.append('keterangan',data.keterangan);
    formData.append('harga', data.harga);
    formData.append('stotk', data.stok);
    formData.append('berat', data.berat);
    return this.http.post(Configendpoint.endpointapi+'/productlist', formData).map(() => { return true; });
  }
  DeleteProduct(id){
    return this.http.delete(Configendpoint.endpointapi+'/productlist/'+id).map(response => response.json());
  }

}

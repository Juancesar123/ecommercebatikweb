import { Configendpoint } from './configendpoint';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import 'rxjs/add/operator/map';
import { Http, RequestOptions,Headers } from '@angular/http';
@Injectable()
export class ProductService {
  handleError: any;

  constructor(public http:Http) { }
  getDataProduct():Observable<any[]>{
    let header = new Headers({'Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    return this.http.get(Configendpoint.endpointapi+'/productlist',options).map(response => response.json());
  }
  SaveProduct(data,fileToUpload: File){
    let header = new Headers({'Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
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
    return this.http.post(Configendpoint.endpointapi+'/productlist', formData,options).map(() => { return true; });
  }
  DeleteProduct(id){
    let header = new Headers({'Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    return this.http.delete(Configendpoint.endpointapi+'/productlist/'+id,options).map(response => response.json());
  }
  UpdateData(data,fileToUpload: File,id){
    let header = new Headers({'Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
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
    return this.http.patch(Configendpoint.endpointapi+'/productlist/'+id, formData,options).map(() => { return true; });

  }

}

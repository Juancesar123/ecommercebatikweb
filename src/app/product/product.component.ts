import { ProductService } from './../product.service';
import { Configendpoint } from './../configendpoint';
import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { DataTablesResponse } from '../datatableresponse';
import { Subject } from 'rxjs/Subject';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})


export class ProductComponent implements OnInit,AfterViewInit {
  dtOptions: DataTables.Settings = {};
  dataproduct;
  apiendpoint:any = Configendpoint.endpointapi;
  fileToUpload: File = null;
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();
  dtInstance: DataTables.Api;
  nama:String;
  keterangan:String;
  warna:String;
  harga:String;
  stok:String;
  berat:String;
  data:any;
  ukuran:String;
  constructor(public productservices:ProductService) { }
  
  ngOnInit(){
    this.productservices.getDataProduct().subscribe(val =>{
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 2

      };
      this.dataproduct = val;
      
      this.dtInstance.destroy();
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();

    })
  }
  onFileChange(event) {
    if(event.target.files.length > 0) {
      this.fileToUpload = event.target.files[0];
      //console.log(this.fileToUpload)
      //this.form.get('avatar').setValue(file);
    }
  }
  DeleteProduct(productlist){
    let id = productlist.id;
    this.productservices.DeleteProduct(id).subscribe(val =>{
      this.GetDataProduct();
    })
  }
  SaveDataProduct(){
    this.data = {namabarang:this.nama,keterangan:this.keterangan,warna:this.warna,berat:this.berat,stok:this.stok,ukuran:this.ukuran}
    this.productservices.SaveProduct(this.data,this.fileToUpload).subscribe(val => {
      alert('data sukses di simpan');  
      this.GetDataProduct();
    })
  }
  GetDataProduct(){
    this.productservices.getDataProduct().subscribe(val =>{
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 2

      };
      this.dataproduct = val;
      
      this.dtInstance.destroy();
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();

    })
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
  
}

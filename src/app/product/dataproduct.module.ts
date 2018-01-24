import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Productrouter } from './product.route';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
@NgModule({
  imports: [
    Productrouter,
    FormsModule,
    CommonModule,
    DataTablesModule
  ],
  declarations: [ProductComponent]
})
export class DataproductModule { }

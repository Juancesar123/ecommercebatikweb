import { LoginComponent } from './login.component';
import { ChartModule } from 'angular-highcharts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { Loginrouter } from './login.route';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    DataTablesModule,
    ChartModule,
    Loginrouter
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }

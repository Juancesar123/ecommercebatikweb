import { RegisterRouter } from './register.route';
import { RegisterComponent } from './register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    DataTablesModule,
    RegisterRouter
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }

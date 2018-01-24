import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { dashboardRouter } from './dashboard.route';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    DataTablesModule,
    NgProgressRouterModule,
    NgProgressModule,
    dashboardRouter
  ],
  declarations: [
      DashboardComponent,
      HeaderComponent,
      FooterComponent,
      SidemenuComponent
    ]
})
export class DashboardModule { }

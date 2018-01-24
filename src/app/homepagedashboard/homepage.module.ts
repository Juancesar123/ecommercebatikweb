import { SidemenuComponent } from './../sidemenu/sidemenu.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';
import { HomepagedashboardComponent } from './homepagedashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';
import { DataTablesModule } from 'angular-datatables';
import { HomepageDashboardRoute } from './homepage.route';
import { ChartModule } from 'angular-highcharts';
@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    HomepageDashboardRoute,
    ChartModule,
    NgProgressRouterModule,
    NgProgressModule,
    CommonModule

  ],
  declarations: [
      HomepagedashboardComponent,
    ]
})
export class HomepageModule { }

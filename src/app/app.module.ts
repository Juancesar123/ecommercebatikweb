import { RegisterModule } from './register/register.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HistoryTransaksiModule } from './historytransaksi/historytransaksi.module';
import { DataTransaksiModule } from './datatransaksi/datatransaksi.module';
import { LaporanPenjualanModule } from './laporanpenjualan/laporanpenjualan.module';
import { DataproductModule } from './product/dataproduct.module';
import { AuthlinkGuard } from './authlink.guard';
import { appRouterModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { DataTablesModule } from 'angular-datatables';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LaporanpenjualanComponent } from './laporanpenjualan/laporanpenjualan.component';
import { DatatransaksiComponent } from './datatransaksi/datatransaksi.component';
import { HistorytransaksiComponent } from './historytransaksi/historytransaksi.component';
import { HomepageModule } from './homepagedashboard/homepage.module';
import { LoginModule } from './login/login.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    appRouterModule,
    FormsModule,
    DataTablesModule,
    DataproductModule,
    NgProgressModule.forRoot(),
    NgProgressRouterModule,
    DataTransaksiModule,
    HttpClientModule,
    HttpModule,
    LaporanPenjualanModule,
    ChartModule,
    HistoryTransaksiModule,
    HomepageModule,
    DashboardModule,
    RegisterModule,
    LoginModule
  ],
  providers: [AuthlinkGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

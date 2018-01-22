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
import { HomepagedashboardComponent } from './homepagedashboard/homepagedashboard.component';
import { ProductComponent } from './product/product.component';
import { DataTablesModule } from 'angular-datatables';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    FooterComponent,
    HeaderComponent,
    HomepagedashboardComponent,
    ProductComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    appRouterModule,
    FormsModule,
    DataTablesModule,
    NgProgressModule.forRoot(),
    NgProgressRouterModule,
    HttpClientModule,
    HttpModule,
    ChartModule
  ],
  providers: [AuthlinkGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

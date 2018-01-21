import { appRouterModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomepagedashboardComponent } from './homepagedashboard/homepagedashboard.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    FooterComponent,
    HeaderComponent,
    HomepagedashboardComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    appRouterModule,
    FormsModule,
    HttpModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HistorytransaksiComponent } from './historytransaksi/historytransaksi.component';
import { HistorytransaksiService } from './historytransaksi.service';
import { DatatransaksiComponent } from './datatransaksi/datatransaksi.component';
import { LaporanpenjualanComponent } from './laporanpenjualan/laporanpenjualan.component';
import { AuthlinkGuard } from './authlink.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductService } from './product.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { HomepagedashboardComponent } from './homepagedashboard/homepagedashboard.component';


import { Routes,RouterModule  } from '@angular/router';

const routes: Routes = [
    // map '/persons' to the people list component
    {
      path: 'dashboard',
      //loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
      component:DashboardComponent,
      canActivate:[AuthlinkGuard],
      children:[
        {
          path:'home',
          loadChildren: 'app/homepagedashboard/homepage.module#HomepageModule',
          canActivate:[AuthlinkGuard]
        },   
        {
          path: 'dataproduct',
          loadChildren: 'app/product/dataproduct.module#DataproductModule',
          canActivate: [AuthlinkGuard],
        },
        {
          path: 'laporanpenjualan',
          loadChildren: 'app/laporanpenjualan/laporanpenjualan.module#LaporanPenjualanModule',
          canActivate: [AuthlinkGuard],
        },
        {
          path: 'datatransaksi',
          loadChildren: 'app/datatransaksi/datatransaksi.module#DataTransaksiModule',
          canActivate: [AuthlinkGuard],
        },
        {
          path: 'historytransaksi',
          loadChildren: 'app/historytransaksi/historytransaksi.module#HistoryTransaksiModule',
          canActivate: [AuthlinkGuard],
        },
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        },
      ]
    },
    // map '/' to '/persons' as our default route
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
    {
      path:'login',
      loadChildren: 'app/login/login.module#LoginModule',
    },
    {
      path:'register',
      loadChildren: 'app/register/register.module#RegisterModule',
    }
  ];
  export const appRouterModule = RouterModule.forRoot(routes);
  
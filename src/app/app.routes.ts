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
      component: DashboardComponent,
      canActivate:[AuthlinkGuard],
      children:[
        {
          path:'home',
          component:HomepagedashboardComponent,
          canActivate:[AuthlinkGuard]
        },   
        {
          path: 'dataproduct',
          component: ProductComponent,
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
      component:LoginComponent
    },
    {
      path:'register',
      component:RegisterComponent
    }
  ];
  export const appRouterModule = RouterModule.forRoot(routes);
  
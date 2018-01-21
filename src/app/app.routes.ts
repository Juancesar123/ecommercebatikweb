import { ProductComponent } from './product/product.component';
import { HomepagedashboardComponent } from './homepagedashboard/homepagedashboard.component';


import { Routes,RouterModule  } from '@angular/router';

const routes: Routes = [
    // map '/persons' to the people list component
    {
      path: 'home',
      component: HomepagedashboardComponent,
    },
    // map '/' to '/persons' as our default route
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: 'dataproduct',
      component: ProductComponent,
    },
  ];
  export const appRouterModule = RouterModule.forRoot(routes);
  
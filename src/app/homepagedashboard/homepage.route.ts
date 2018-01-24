import { HomepagedashboardComponent } from './homepagedashboard.component';
import { Routes, RouterModule } from '@angular/router';
const HOMEPAGE_ROUTER: Routes = [
    { 
        path: '',
        component: HomepagedashboardComponent
    }
];

export const HomepageDashboardRoute = RouterModule.forChild(HOMEPAGE_ROUTER);
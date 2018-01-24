import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
const DASHBOARD_ROUTER : Routes = [
    { 
        path: '',
        component: DashboardComponent
    }
];

export const dashboardRouter = RouterModule.forChild(DASHBOARD_ROUTER);
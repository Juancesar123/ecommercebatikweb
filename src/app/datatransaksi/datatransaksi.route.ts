import { DatatransaksiComponent } from './datatransaksi.component';
import { Routes, RouterModule } from '@angular/router';
const DATATRANSAKSI_ROUTER: Routes = [
    { 
        path: '',
        component: DatatransaksiComponent
    }
];

export const DatatransaksiRoute = RouterModule.forChild(DATATRANSAKSI_ROUTER);
import { HistorytransaksiComponent } from './historytransaksi.component';
import { Routes, RouterModule } from '@angular/router';
const HISTORYTRANSAKSI_ROUTER: Routes = [
    { 
        path: '',
        component: HistorytransaksiComponent
    }
];

export const HistoryTransaksiRoute = RouterModule.forChild(HISTORYTRANSAKSI_ROUTER);
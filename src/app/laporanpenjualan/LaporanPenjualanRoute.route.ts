import { LaporanpenjualanComponent } from './laporanpenjualan.component';
import { Routes, RouterModule } from '@angular/router';
const LAPORANPENJUALAN_ROUTER: Routes = [
    { 
        path: '',
        component: LaporanpenjualanComponent
    }
];

export const LaporanPenjualanrouter = RouterModule.forChild(LAPORANPENJUALAN_ROUTER);
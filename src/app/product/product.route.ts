import { ProductComponent } from './product.component';
import { Routes, RouterModule } from '@angular/router';
const PRODUCT_ROUTER: Routes = [
    { 
        path: '',
        component: ProductComponent
    }
];

export const Productrouter = RouterModule.forChild(PRODUCT_ROUTER);
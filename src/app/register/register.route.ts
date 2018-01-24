import { RegisterComponent } from './register.component';
import { Routes, RouterModule } from '@angular/router';
const REGISTER_ROUTER: Routes = [
    { 
        path: '',
        component: RegisterComponent
    }
];

export const RegisterRouter = RouterModule.forChild(REGISTER_ROUTER);
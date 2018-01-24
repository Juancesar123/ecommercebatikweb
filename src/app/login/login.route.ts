import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
const LOGIN_ROUTER: Routes = [
    { 
        path: '',
        component: LoginComponent
    }
];

export const Loginrouter = RouterModule.forChild(LOGIN_ROUTER);
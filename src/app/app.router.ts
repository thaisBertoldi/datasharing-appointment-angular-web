import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './view/login/login.component';

const routes: Routes = [
    //home
    {
        path: '',
        component: LoginComponent
    }, 
];

export const RoutingModule = RouterModule.forRoot(routes);
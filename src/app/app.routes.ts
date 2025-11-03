import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Perfil } from './components/perfil/perfil';

export const routes: Routes = [
    {
        path: '',
        component: Login,
    },
    {
        path: 'perfil',
        component: Perfil,
    }
];

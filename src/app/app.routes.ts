import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';
export const routes: Routes = [
    {
        path:"",
        loadComponent:() => import('./features/home/home/home').then((m) => m.Home)
    },
{
path: 'login',
loadComponent: () => import('./features/login/login/login').then((m)=>m.Login) 
},
    {path:"**", redirectTo:""}
];


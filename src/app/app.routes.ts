import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';
export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import('./features/home/home/home').then((m) => m.Home)
    },
    {
        path: 'assinaturas',
        canActivate:[authGuard],
        loadComponent: () => import('./features/assinaturas/assinaturas/assinaturas').then((m) => m.Assinaturas)
    },
    {
        path: 'login',
        loadComponent: () => import('./features/login/login/login').then((m) => m.Login)
    },
    {
        path: 'instrutores',
        loadComponent: () => import('./features/instrutores/lista-instrutores/lista-instrutores').then((m) => m.ListaInstrutores)
    },
    {
        path: 'academias',
        loadComponent: () => import('./features/academias/lista-academias/lista-academias').then((m) => m.ListaAcademias)
    },
    {
        path: 'aulas',
        loadComponent: () => import('./features/aulas/lista-aulas/lista-aulas').then((m) => m.ListaAulas)
    },
    { path: "**", redirectTo: "" }
];


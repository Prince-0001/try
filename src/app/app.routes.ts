import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, 
    { 
      path: 'login', 
      loadComponent: () => import('./pages/login/signup.component').then(m => m.SignupComponent) 
    },
    { 
      path: 'signUp', 
      loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent) 
    },
    {
        path:"home",
        loadComponent:()=>import('./pages/layout/layout.component').then(m=>m.LayoutComponent),
    }
];

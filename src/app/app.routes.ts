import { Routes } from '@angular/router';

export const routes: Routes = [
    // Redirect to login by default (Uncomment if needed)
    // { path: '', redirectTo: 'login', pathMatch: 'full' }, 
    
    { 
        path: 'login', 
        loadComponent: () => import('./pages/login/signup.component').then(m => m.SignupComponent) 
    },
    { 
        path: 'signUp', 
        loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent) 
    },
    {
        path: '', // Root path
        loadComponent: () => import('./pages/layout/layout.component').then(m => m.LayoutComponent),
        children: [
            {
                path: 'map',
                loadComponent: () => import('./components/map/map.component').then(m => m.MapComponent)
            },
            {
                path: 'home',
                loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
            },
            { 
                path: 'shipment-tracking', 
                loadComponent: () => import('./pages/shipment-tracking/shipment-tracking.component').then(m => m.ShipmentTrackingComponent) 
              }
              
        ]
    }
];

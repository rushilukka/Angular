import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'user',
        loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)
    }
];

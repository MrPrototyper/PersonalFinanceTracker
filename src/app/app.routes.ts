import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // redirectTo: 'dashboard',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/routes').then((m) => m.AUTH_ROUTES),
  },
//   {
//     path: 'dashboard',
//     loadComponent: () =>
//       import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
//   },
//   {
//     path: 'transactions',
//     loadChildren: () =>
//       import('./features/transactions/routes').then((m) => m.TRANSACTIONS_ROUTES),
//   },
//   {
//     path: 'budget',
//     loadComponent: () =>
//       import('./features/budget/budget.component').then((m) => m.BudgetComponent),
//   },
//   {
//     path: 'profile',
//     loadComponent: () =>
//       import('./features/profile/profile.component').then((m) => m.ProfileComponent),
//   },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

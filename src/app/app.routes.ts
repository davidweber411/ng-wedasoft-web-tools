import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.routes')},
  {path: 'wheelOfChoices', loadChildren: () => import('./wheel-of-choices/wheel-of-choices.routes')},
];

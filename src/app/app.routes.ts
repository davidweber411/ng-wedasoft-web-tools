import {Routes} from '@angular/router';

export const routes: Routes = [
  // {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: '', redirectTo: 'wheel-of-choices', pathMatch: 'full'},
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.routes')},
  {path: 'wheel-of-choices', loadChildren: () => import('./wheel-of-choices/wheel-of-choices.routes')},
  {path: 'decision-weigher', loadChildren: () => import('./decision-weigher/decision-weigher.routes')},
  {path: '**', loadChildren: () => import('./shared/error-page/error-page.routes')}
];

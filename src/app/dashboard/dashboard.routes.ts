import {Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";

const dashboardRoutes: Routes = [
  {path: '', component: DashboardComponent},
  /*
    { path: 'create', component: BookCreateComponent },
    { path: 'search', component: BookSearchComponent },
    { path: ':isbn', component: BookDetailsComponent },
  * */
];

export default dashboardRoutes;

import {Routes} from '@angular/router';
import {ErrorPageComponent} from "./error-page/error-page.component";

const errorPageRoutes: Routes = [
  {path: '', component: ErrorPageComponent},
];

export default errorPageRoutes;

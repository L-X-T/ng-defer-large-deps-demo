import { Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './charts/charts.component';
import { TableComponent } from './table/table.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'charts',
    component: ChartsComponent,
  },

  {
    path: 'pivot-table',
    component: TableComponent,
  },

  /*{
    path: '**',
    redirectTo: '',
  },*/
];

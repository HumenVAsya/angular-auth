import { Routes } from '@angular/router';
import { LoginComponent } from '@auth/components/login/login.component';
import { GraphComponent } from './apps/graph/shared/graph/graph.component';
import { AssessmentCardComponent } from './apps/cards/shared/card/card.component';
import { AuthGuard } from '@core/guards/auth.guard';
import { NotFoundComponent } from '@shared/components/not-found/not-found.component';
import { AppRoutes } from '@core/enums/routes.enam';
import { UsersComponent } from './apps/users/shared/users/users.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: AppRoutes.LOGIN,
    pathMatch: 'full',
  },
  {
    path: AppRoutes.LOGIN,
    loadComponent: () => LoginComponent,
  },
  {
    path: AppRoutes.DASHBOARD,
    loadComponent: () => AssessmentCardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: AppRoutes.USERS,
    loadComponent: () => UsersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: AppRoutes.GRAPH,
    loadComponent: () => GraphComponent,
    canActivate: [AuthGuard],
  },
  {
    path: AppRoutes.NOT_FOUND,
    loadComponent: () => NotFoundComponent,
    canActivate: [AuthGuard],
  },
];

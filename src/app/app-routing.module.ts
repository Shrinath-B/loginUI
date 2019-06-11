import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './features/auth/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'src/app/features/home-page/home-page.module#HomePageModule'
  },
  {
    path: 'dashboard',
    loadChildren: 'src/app/features/dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

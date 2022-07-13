import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { LandingPageComponent } from './shared/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shared/shared.module').then((m) => m.SharedModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

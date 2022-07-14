import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
    canLoad: [ AuthGuard ],
    canActivate: [ AuthGuard ],
  },
  {
    path: '',
    loadChildren: () => import('./shared/shared.module').then((m) => m.SharedModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LandingPageComponent,
        pathMatch: 'full'
      },
      {
        path: '404',
        component: ErrorPageComponent,
      },
      {
        path: '**',
        redirectTo: '404',
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SharedRoutingModule { }

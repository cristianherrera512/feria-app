import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { GalleriaModule } from 'primeng/galleria';
import { SharedRoutingModule } from './shared-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    ErrorPageComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    SharedRoutingModule
  ],
  exports: [
    ErrorPageComponent,
    LandingPageComponent
  ]

})
export class SharedModule { }

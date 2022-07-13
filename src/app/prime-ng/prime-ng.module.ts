import { NgModule } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import {CarouselModule} from 'primeng/carousel';



@NgModule({
  exports: [
    GalleriaModule,
    CarouselModule
  ]
})
export class PrimeNgModule { }

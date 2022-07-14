import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { InputTextModule } from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    CarouselModule,
    GalleriaModule,
    InputTextModule,
    ToastModule
  ],
})
export class PrimeNgModule {}

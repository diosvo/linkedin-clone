import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AdvertisingComponent } from './advertising.component';

@NgModule({
  declarations: [AdvertisingComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [AdvertisingComponent],
})
export class AdvertisingModule { }

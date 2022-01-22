import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdvertisingComponent } from './advertising.component';

@NgModule({
  declarations: [AdvertisingComponent],
  imports: [
    CommonModule
  ],
  exports: [AdvertisingComponent],
})
export class AdvertisingModule { }

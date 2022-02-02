import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  declarations: [HeaderComponent, PopoverComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule { }

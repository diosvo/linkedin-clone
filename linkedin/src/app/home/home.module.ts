import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';
import { PopoverComponent } from './components/header/popover/popover.component';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home.page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PopoverComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,

    FormsModule,
    IonicModule,
  ],
})
export class HomePageModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AdvertisingModule } from './components/advertising/advertising.module';
import { ProfileSummaryModule } from './components/profile-summary/profile-summary.module';
import { StartPostModule } from './components/start-post/start-post.module';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home.page.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,

    IonicModule,

    StartPostModule,
    AdvertisingModule,
    ProfileSummaryModule,
  ],
})
export class HomePageModule { }

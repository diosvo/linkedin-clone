import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ProfileSummaryComponent } from './profile-summary.component';

@NgModule({
  declarations: [ProfileSummaryComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ProfileSummaryComponent],
})
export class ProfileSummaryModule { }

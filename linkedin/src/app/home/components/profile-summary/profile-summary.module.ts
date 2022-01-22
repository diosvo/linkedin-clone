import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileSummaryComponent } from './profile-summary.component';

@NgModule({
  declarations: [ProfileSummaryComponent],
  imports: [
    CommonModule
  ],
  exports: [ProfileSummaryComponent],
})
export class ProfileSummaryModule { }

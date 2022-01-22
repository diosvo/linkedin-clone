import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';
import { StartPostComponent } from './start-post.component';

@NgModule({
  declarations: [
    StartPostComponent,
    CreateDialogComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [StartPostComponent]
})
export class StartPostModule { }

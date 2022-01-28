import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';

@Component({
  selector: 'app-start-post',
  templateUrl: './start-post.component.html',
  styleUrls: ['./start-post.component.scss']
})
export class StartPostComponent {

  actions: Array<{ icon: string, fill: string, action: string }> = [
    {
      icon: 'image-outline',
      fill: 'secondary',
      action: 'photo'
    },
    {
      icon: 'videocam-outline',
      fill: 'success',
      action: 'video'
    },
    {
      icon: 'calendar-outline',
      fill: 'warning',
      action: 'event'
    },
    {
      icon: 'newspaper-outline',
      fill: 'danger',
      action: 'write article'
    }
  ]

  constructor(private readonly controller: ModalController) { }

  async openDialog(): Promise<void> {
    const modal = await this.controller.create({
      component: CreateDialogComponent,
      cssClass: 'create-post-dialog'
    });
    (await modal).present();
  }

  onAction(action: string): void {
    switch (action) {
      case 'photo': {
        console.log('aaaa');
      }
    }
  }
}

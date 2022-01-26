import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menu: Array<{ name: string, icon: string }> = [
    {
      name: 'home',
      icon: 'home'
    },
    {
      name: 'my network',
      icon: 'people'
    },
    {
      name: 'jobs',
      icon: 'bag-handle'
    },
    {
      name: 'message',
      icon: 'chatbubble-ellipses'
    },
  ]

  constructor(private readonly controller: PopoverController) { }

  async onConfig(): Promise<void> {
    const popover = this.controller.create({
      component: PopoverComponent,
      cssClass: 'config-popover',
      showBackdrop: false
    });
    (await popover).present();
  }
}

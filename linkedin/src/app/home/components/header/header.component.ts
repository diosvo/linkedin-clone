import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private readonly controller: PopoverController) { }

  async onConfig(event: Event): Promise<void> {
    const popover = this.controller.create({
      component: PopoverComponent,
      cssClass: 'config-popover',
      event,
      showBackdrop: false
    });
    (await popover).present();

    const { role } = await (await popover).onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}

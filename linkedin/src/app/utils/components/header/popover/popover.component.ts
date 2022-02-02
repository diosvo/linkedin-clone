import { Component } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent {

  actions: { [key: string]: Array<string> } = {
    account: ['setting & privacy', 'help', 'language'],
    manage: ['posts & activities', 'job posting account']
  };

  constructor() { }

  onAction(action: string): void {
    switch (action) {
      case 'setting & privacy': {
        this.signOut();
      }
    }
  }

  signOut(): void {
    console.log('aaa');
  }
}

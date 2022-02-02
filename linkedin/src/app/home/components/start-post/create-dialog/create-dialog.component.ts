import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { BasicRequestAPI, EMethod } from 'src/app/utils/models/role_controller';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent {
  options: Array<{ icon: string }> = [
    {
      icon: 'images-outline'
    },
    {
      icon: 'logo-youtube'
    },
    {
      icon: 'document-outline'
    },
    {
      icon: 'bag-handle-outline'
    },
    {
      icon: 'bar-chart-outline'
    },
  ];

  text_string = new FormControl('', Validators.required);

  constructor(private readonly controller: ModalController) { }

  onPost(): void {
    this.controller.dismiss(BasicRequestAPI(this.text_string.value, EMethod.POST));
  }

  onDismiss(): void {
    this.controller.dismiss(null);
  }
}

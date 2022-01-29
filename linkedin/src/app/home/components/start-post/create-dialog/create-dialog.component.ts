import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent implements OnInit {
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
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

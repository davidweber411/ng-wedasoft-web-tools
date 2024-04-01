import {Component, Inject} from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle
} from '@angular/material/dialog';
import {MatButton} from "@angular/material/button";

@Component({
    selector: 'app-info-dialog',
    templateUrl: './info-dialog.component.html',
    standalone: true,
    imports: [
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatDialogClose,
        MatButton
    ],
    styleUrls: ['./info-dialog.component.scss']
})
export class InfoDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    title: string,
    message: string
  }) {

  }

}

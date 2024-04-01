import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {InfoDialogComponent} from "../../components/info-dialog/info-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {

  }

  showInfoDialog(title: string, message: string) {
    this.dialog.open(InfoDialogComponent, {
      data: {
        title: title,
        message: message
      }
    });
  }

}

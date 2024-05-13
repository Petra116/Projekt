
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-subscribe-dialog',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './subscribe-dialog.component.html',
  styleUrl: './subscribe-dialog.component.scss'
})
export class SubscribeDialogComponent {
  constructor(private dialogRef: MatDialogRef<SubscribeDialogComponent>) {}
  
  onNoClick() {
    this.dialogRef.close();
  }
}

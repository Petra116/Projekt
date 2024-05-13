import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-buy-ticket-dialog',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './buy-ticket-dialog.component.html',
  styleUrl: './buy-ticket-dialog.component.scss'
})
export class BuyTicketDialogComponent {
  constructor(private dialogRef: MatDialogRef<BuyTicketDialogComponent>) {}
  
  onNoClick() {
    this.dialogRef.close();
  }
}

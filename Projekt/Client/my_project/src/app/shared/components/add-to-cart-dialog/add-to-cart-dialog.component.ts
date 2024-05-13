import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-to-cart-dialog',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatSelectModule, MatInputModule],
  templateUrl: './add-to-cart-dialog.component.html',
  styleUrl: './add-to-cart-dialog.component.scss'
})
export class AddToCartDialogComponent{

  constructor(private dialogRef: MatDialogRef<AddToCartDialogComponent>) {}

  onBackClick() {
    this.dialogRef.close();
  }
}
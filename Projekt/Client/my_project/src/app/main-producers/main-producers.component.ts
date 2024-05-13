import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../shared/services/auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Producer } from '../shared/model/Producer';
import { ProducerService } from '../shared/services/producer.service';
import { SubscribeDialogComponent } from '../shared/components/subscribe-dialog/subscribe-dialog.component';

@Component({
  selector: 'app-main-producers',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, MatSnackBarModule],
  templateUrl: './main-producers.component.html',
  styleUrl: './main-producers.component.scss'
})
export class MainProducersComponent {
  producers?: Producer[];
  columns = ['email', 'name', 'address', 'phone', 'subscribe'];

  constructor(private producerService: ProducerService,
    private router: Router, 
    private location: Location, 
    private authService: AuthService, 
    private dialog: MatDialog, 
    private snackbar: MatSnackBar){}

  ngOnInit(){
    this.producerService.getAllProducers().subscribe({
      next: (data) => {
        this.producers=data;
      }, error: (err) => {
        console.log(err);
      }
    });
  }

  subscribe(){
    const dialogRef = this.dialog.open(SubscribeDialogComponent);
    dialogRef.afterClosed().subscribe({
      next: (data) => {
        if(data){
          console.log(data);
          this.openSnackBar('Successful subscription.', 2000);
          /*this.productService.addToCart().subscribe({
            next: (data) => {
              console.log(data);
              //this.products?[3];
              //this.users = this.users?.filter((user, index) => index !== n);
              this.openSnackBar('Added to cart successfully', 2000);
            }, error: (err) => {
              console.log(err);
            }
          })*/
        }
      }, error: (err) => {
        console.log(err);
      }
    })
  }

  openSnackBar(message: string, duration: number) {
    this.snackbar.open(message, undefined, {duration: duration});
  }

  logout(){
    this.authService.logout().subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigateByUrl('/welcome');
      }, error: (err) => {
        console.log(err);
      }   
    })
  }

  navigate(to: string){
    this.router.navigateByUrl(to);
  }

  goBack(){
    this.location.back();
  }
}


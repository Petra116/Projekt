import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Event} from '../shared/model/Event';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { EventService } from '../shared/services/event.service';
import { AuthService } from '../shared/services/auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BuyTicketDialogComponent } from '../shared/components/buy-ticket-dialog/buy-ticket-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-main-events',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, MatSnackBarModule],
  templateUrl: './main-events.component.html',
  styleUrl: './main-events.component.scss'
})
export class MainEventsComponent {
  events?: Event[];
  columns = ['name', 'place', 'date', 'time', 'organizer', 'price', 'capacity', 'buy'];

  constructor(private eventService: EventService,
    private router: Router, 
    private location: Location, 
    private authService: AuthService, 
    private dialog: MatDialog, 
    private snackbar: MatSnackBar){}

  ngOnInit(){
    this.eventService.getAllEvents().subscribe({
      next: (data) => {
        this.events=data;
      }, error: (err) => {
        console.log(err);
      }
    });
  }

  buyTicket(){
    const dialogRef = this.dialog.open(BuyTicketDialogComponent);
    dialogRef.afterClosed().subscribe({
      next: (data) => {
        if(data){
          console.log(data);
          this.openSnackBar('Ticket bought successfully', 2000);
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

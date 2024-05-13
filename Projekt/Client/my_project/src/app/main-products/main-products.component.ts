import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/model/Product';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { ProductService } from '../shared/services/product.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddToCartDialogComponent } from '../shared/components/add-to-cart-dialog/add-to-cart-dialog.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-main-products',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, MatDialogModule, MatSnackBarModule],
  templateUrl: './main-products.component.html',
  styleUrl: './main-products.component.scss'
})
export class MainProductsComponent {
  products?: Product[];
  columns = ['name', 'producer', 'price', 'quantity', 'origin', 'preorder', 'delivery', 'availability', 'discount', 'add'];

  constructor(private productService: ProductService,
    private router: Router, 
    private location: Location, 
    private dialog: MatDialog, 
    private snackbar: MatSnackBar, 
    private authService: AuthService){}

  ngOnInit(){
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products=data;
      }, error: (err) => {
        console.log(err);
      }
    });
  }

  addToCart(){
    const dialogRef = this.dialog.open(AddToCartDialogComponent);
    dialogRef.afterClosed().subscribe({
      next: (data) => {
        if(data){
          console.log(data);
          this.openSnackBar('Added to cart successfully', 2000);
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

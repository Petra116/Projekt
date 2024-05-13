import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/model/Product';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-my-products',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './my-products.component.html',
  styleUrl: './my-products.component.scss'
})
export class MyProductsComponent implements OnInit{

  myProducts?: Product[];

  columns = ['name', 'producer', 'price', 'quantity', 'origin', 'preorder', 'delivery', 'availability', 'discount'];

  constructor(private productService: ProductService, 
    private router: Router, 
    private location: Location){}


  ngOnInit(){
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.myProducts=data;
      }, error: (err) => {
        console.log(err);
      }
    });
    //this.myProducts = this.myProducts?.filter(());
  }

  navigate(to: string){
    this.router.navigateByUrl(to);
  }

  goBack(){
    this.location.back();
  }
}

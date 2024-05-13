import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/model/Product';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-guest-products',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule],
  templateUrl: './guest-products.component.html',
  styleUrl: './guest-products.component.scss'
})

export class GuestProductsComponent implements OnInit{
  products?: Product[];
  columns = ['name', 'producer', 'price', 'quantity', 'origin', 'preorder', 'delivery', 'availability', 'discount'];

  constructor(private productService: ProductService,
    private router: Router, private location: Location){}

  ngOnInit(){
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products=data;
      }, error: (err) => {
        console.log(err);
      }
    });
  }

  navigate(to: string){
    this.router.navigateByUrl(to);
  }

  goBack(){
    this.location.back();
  }
}
import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-newproduct',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './newproduct.component.html',
  styleUrl: './newproduct.component.scss'
})
export class NewproductComponent implements OnInit{
  productForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private productService: ProductService, 
    private location: Location) {}

  ngOnInit(){
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      producer: ['', [Validators.required]],
      price: ['', [Validators.required]],
      quantity: [''],
      origin: [''],
      preorder: [''],
      delivery: [''],
      availability: [''],
      discount: ['']
    })
  }

  onSubmit(){
    if(this.productForm.valid){
      console.log('Form data: ', this.productForm.value);
      this.productService.addProduct(this.productForm.value).subscribe({
        next: (data) => {
          console.log(data);
        }, error: (err) => {
          console.log(err);
        }
      });
    } else {
      console.log('Form is not valid.');
    }
  }

  goBack(){
    this.location.back();
  }

}

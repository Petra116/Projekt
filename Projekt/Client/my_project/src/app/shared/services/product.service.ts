import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addProduct(product: Product){
    //HTTP POST request
    const body = new URLSearchParams();
    body.set('name', product.name);
    body.set('producer', product.producer);
    body.set('price', product.price);
    body.set('quantity', product.quantity);
    body.set('origin', product.origin);
    body.set('preorder', product.preorder);
    body.set('delivery', product.delivery);
    body.set('availability', product.availability);
    body.set('discount', product.discount);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post('http://localhost:5000/app/addProduct', body, {headers: headers})
  }

  getAllProducts(){
    return this.http.get<Product[]>('http://localhost:5000/app/getAllProducts');
  }

  /*getMyProducts(){
    return this.http.get<Product[]>('http://localhost:5000/app/getMyProducts');
  }*/


  /*addToCart() {
    return this.http.get<Product[]>('http://localhost:5000/app/addToCart');
  }*/

  /*delete(id: string){
    return this.http.delete('http://localhost:5000/app/deleteUser?id=' + id, {withCredentials: true});
  }*/
}
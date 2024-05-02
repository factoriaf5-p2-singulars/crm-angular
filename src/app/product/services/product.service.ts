import { inject, Injectable } from '@angular/core';
// import products from '../../data/products.json';
import { Product } from '../../shared/interfaces/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products!:Product[];
  http=inject(HttpClient);

  // constructor(){
  //   this.products = products;
  // }

  getAllProduct(){
    return this.http.get("http://localhost:3000/products");
  }

  addProduct(product:Product){
    this.products.push(product)
  }
}

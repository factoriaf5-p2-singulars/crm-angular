import { Injectable } from '@angular/core';
import products from '../../data/products.json';
import { Product } from '../../shared/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products!:Product[];

  constructor(){
    this.products=products;
  }

  getAllProduct(){
    return products;
  }

  addProduct(product:Product){
    this.products.push(product)
  }
}

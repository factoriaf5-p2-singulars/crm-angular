import { Injectable } from '@angular/core';
import products from '../../data/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getAllProduct(){
    return products;
  }

  deleteProduct(){

  }
}

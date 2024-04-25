import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from "./component/product-list/product-list.component";
import { Product } from '../shared/interfaces/product';
import { ProductService } from './services/product.service';
import { ProductFormComponent } from "./component/product-form/product-form.component";

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss',
    imports: [ProductListComponent, ProductFormComponent]
})
export class ProductComponent implements OnInit{
  products!:Product[];


 constructor(private productService:ProductService){}

 ngOnInit(): void {
   this.products = this.productService.getAllProduct();
 }

 registerProduct(product:Product){
  this.productService.addProduct(product)
 }
}

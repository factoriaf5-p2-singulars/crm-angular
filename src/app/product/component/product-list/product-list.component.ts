import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../shared/interfaces/product';
import { ProductService } from '../../services/product.service';
import { RouterLink } from '@angular/router';
import { ProductDetailComponent } from "../product-detail/product-detail.component";

@Component({
    selector: 'app-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.scss',
    imports: [RouterLink, ProductDetailComponent]
})
export class ProductListComponent{
 @Input()products!:Product[];

 trackProduct(index:number, product:Product){
  return product.productId
 }

}

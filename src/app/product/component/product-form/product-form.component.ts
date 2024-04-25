import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../../../shared/interfaces/product';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  @Output() formSent=new EventEmitter();

  submit(productForm:NgForm){
    const product: Product={
      productId:999,
      productName: productForm.controls['productName'].value,
      productPrice:productForm.controls['productPrice'].value
    }

    this.formSent.emit(product)
    productForm.resetForm()
  }
}

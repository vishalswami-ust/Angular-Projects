import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../Product';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css'],
})
export class FormbuilderComponent {
  // [x: string]: any;

  product? = new Product('', '', '', 0, 0);

  constructor(private formBuilder: FormBuilder) {}

  productForm = this.formBuilder.group({
    productid: [, [Validators.required, Validators.minLength(8)]],
    brand: [''],
    description: this.formBuilder.group({
      age: [0],
      seasons: [''],
    }),
    qty: [0],
    price: [0],
    suppliers: this.formBuilder.array([this.formBuilder.control('')]),
  });

  onSubmit() {
    console.error(this.productForm);
    console.error(this.productForm.value);
    console.warn(this.productForm.controls['productid'].value);
    // console.error(this.productForm.get('brand').value);
    console.error(
      this.productForm.controls['description'].controls['age'].value
    );
    console.log(this.productForm.controls['suppliers'].controls[0].value);

    //  this.product.productId = this.productForm.controls['productid'].value!;
    // console.log('from product ', this.product.productId);
  }

  get suppliers() {
    return this.productForm.get('suppliers') as FormArray;
  }

  addNewSupplier() {
    console.warn(this.suppliers);
    this.suppliers.push(this.formBuilder.control(''));
  }
}

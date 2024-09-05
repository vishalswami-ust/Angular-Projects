import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
  productForm: FormGroup;
 
  constructor(private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      productid: ['', [Validators.required, Validators.min(1)]],
      brand: [''],
      description: this.formBuilder.group({
        age: [0],
        seasons: [''],
      }),
      qty: [0],
      price: [0],
      suppliers: this.formBuilder.array([
        this.formBuilder.control('')
      ])
    });
  }
 
  get suppliers(): FormArray {
    return this.productForm.get('suppliers') as FormArray;
  }
 
  addNewSupplier() {
    console.warn(this.suppliers);
    this.suppliers.push(this.formBuilder.control(''));
  }
 
  onSubmit() {
    console.error(this.productForm);
    console.error(this.productForm.value);
   
    const productIdControl = this.productForm.get('productid');
    console.warn(productIdControl?.value);
 
    const descriptionGroup = this.productForm.get('description') as FormGroup;
    console.error(descriptionGroup.get('age')?.value);
 
    const suppliersArray = this.productForm.get('suppliers') as FormArray;
    console.log(suppliersArray.at(0)?.value);
  }
}


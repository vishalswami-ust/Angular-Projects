import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {
  productForm = new FormGroup({
    productid: new FormControl('', [Validators.required, Validators.min(1)]),
    brand: new FormControl('', Validators.maxLength(20)),
    description: new FormControl(0),
    qty: new FormControl(0),
    price : new FormControl(0)
  })
  onSubmit(){
    
  }
}

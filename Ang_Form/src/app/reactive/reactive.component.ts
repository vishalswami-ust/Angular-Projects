import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {
productForm = new FormGroup({
  productid: new FormControl(''),
  brand: new FormControl(''),
  description: new FormControl(0),
  qty: new FormControl(0),
  price : new FormControl(0)
})
onSubmit(){
  
}
}

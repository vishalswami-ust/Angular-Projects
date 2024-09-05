import { Component } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  product: Product = new Product('', '', '', 0, 0);

  constructor(private productService: ProductService) {}

  onSubmit() {
    console.warn(this.product);
    //this.productService.saveProduct(this.product);
    this.productService.saveProduct(this.product).subscribe(
      
          (data) => {   console.log(data); },
          (error)=> { console.error(error);}
  );
    //  products.push(product);
  }
}



// https://angular-templates.io/tutorials/about/learn-angular-from-scratch-step-by-step

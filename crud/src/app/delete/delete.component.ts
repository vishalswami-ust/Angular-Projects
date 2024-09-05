import { Component } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  id:number = 0;
  constructor(private productService: ProductService) {}
   
  onDelete() {
    console.warn(this.id);
    //this.productService.saveProduct(this.product);
    this.productService.deleteProduct(this.id).subscribe(
      
          (data) => {   console.log(data); },
          (error)=> { console.error(error);}
  );
    //  products.push(product);
  }
}

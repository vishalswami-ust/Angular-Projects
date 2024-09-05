import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {


  productData: Product[] = [];
  searchBrand: any;
  searchPrice: any;
  constructor(private service:DataService)
  {
      this.productData = service.getProducts();
      console.log(this.productData);

  }

  filteredProducts(): Product[] {
    if(!this.searchBrand && !this.searchPrice)
    {
      return this.productData;
    }
    return this.productData.filter(product => {
      const matchesBrand = !this.searchBrand || product.brand.toLowerCase().includes(this.searchBrand.toLowerCase());
      const matchesPrice = this.searchPrice === null || product.price <= this.searchPrice;

      return matchesBrand && matchesPrice;
    });
  }


  prod: Product = new Product('','','',0,0)
  onSubmit()
  {
      console.log(this.prod);
      this.productData.push(this.prod);
  }
}


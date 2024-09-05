import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products : Product[]=[];
  constructor() { 

      this.products[0] = new Product("s121","Tata","Dish tv",10,2500);
      this.products[1] = new Product("A120","Wipro","LED",50,15000);
      this.products[2] = new Product("G160","Apollo","Tyres",35,35500);
      this.products[3] = new Product("R323","mp341","Belts",20,4500);
      this.products[4] = new Product("X848","Vmware","Virtual Machine",24,9500);
      this.products[5] = new Product("B232","Jio","sim",15,6700);
      this.products[6] = new Product("G633","Tata","Tata Sky",12,1500);
      this.products[7] = new Product("J676","Tata","Tata Ply",5,1200);

  }

  getProducts()
  {
    return this.products;
  }


   
}

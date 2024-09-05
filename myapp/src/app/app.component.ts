import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Niraj';
  company = " From UST";
  productId="AZO1010";
  description = "Dual camera, dual sim, 256gb, 4gb ram";
  available = true;
  quant = 100
  orderqty = 0;
  deliverColor = "red";
  orderDate : Date = new Date;

  printOrder(input : any):void{
    alert(" order placed = "+ this.orderqty );
    console.log(input,"order placed");
  }

 
  
  products = [
    { productId: "1234", description: "Mobile", price: "70000" },
    { productId: "123", description: "Laptop", price: "75000" },
    { productId: "1235", description: "Ipad", price: "30000" },
    { productId: "1234", description: "iPhone15", price: "90000" },
    { productId: "1234", description: "TV", price: "50000" }
  
  ];

 
}
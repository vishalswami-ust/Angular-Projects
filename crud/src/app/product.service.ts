import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Product } from './Product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  saveProduct(product: Product):Observable<Object>{

       let url = 'http://localhost:8080/product/api.1.0/create';

      return  this.http.post(url,product);

  }

  deleteProduct(id: number):Observable<Object>{

    let url = 'http://localhost:8080/product/api.1.0/delete/' + id;

   return  this.http.delete(url, {responseType: 'text' as 'json'});

}
}

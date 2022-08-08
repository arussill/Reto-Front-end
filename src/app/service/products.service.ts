import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../models/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url: string ;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:3000/products";
   }

  getProducts():Observable<Products[]> {
    return this.http.get<Products[]>(`${this.url}`);
  }
}

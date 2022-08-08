import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  products:Array<Products>;

  constructor(private productsService: ProductsService) {
    this.products = new Array();
  }

  ngOnInit(): void {
    this.listProducts();
  }

  private listProducts(): void {
    this.productsService.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }
}

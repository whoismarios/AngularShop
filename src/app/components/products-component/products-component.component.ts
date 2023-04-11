import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from 'src/app/backend/services/product-service/products-service.service';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.css']
})
export class ProductsComponentComponent implements OnInit {

  products: any;

  constructor(private productService: ProductsServiceService){

  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data: any) => {
      this.products = data;
    });
  }

}

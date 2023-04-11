import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsServiceService {

  private apiUrl = 'http://localhost:80/AngularShop/get_products.php';

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(this.apiUrl);
  }
}

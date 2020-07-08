import { Injectable } from '@angular/core';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[]=[
    new Product(1, 'Product1', 'this is product 1 description', 200),
    new Product(2, 'Product2', 'this is product 2 description', 250),
    new Product(3, 'Product3', 'this is product 3 description', 300),
    new Product(4, 'Product4', 'this is product 4 description', 350),
    new Product(5, 'Product5', 'this is product 5 description', 400),
    new Product(6, 'Product6', 'this is product 6 description', 450),
    new Product(7, 'Product7', 'this is product 7 description', 500),
    new Product(8, 'Product8', 'this is product 8 description', 550),
 ]

  constructor() { }

  getProducts(): Product[]{
    return this.products
  }
}

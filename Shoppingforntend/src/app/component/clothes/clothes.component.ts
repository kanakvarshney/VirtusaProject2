import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/service/product.service';
import {Product} from 'src/app/models/product';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {

  productList: Product[]=[]

  constructor( private productService: ProductService) { }

  ngOnInit(): void {

    this.productList=this.productService.getProducts()
  }

}

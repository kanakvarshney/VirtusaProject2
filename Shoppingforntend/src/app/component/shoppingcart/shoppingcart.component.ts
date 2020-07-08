import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {MessengerService} from 'src/app/service/messenger.service';
import {Product} from 'src/app/models/product';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  cartItems=[
  //    {id:1 , productId:1, productName:'test1', qty:4, price: 200, },
  //    {id:2 , productId:2, productName:'test2', qty:3, price: 250},
  //  {id:3 , productId:3, productName:'test3', qty:1, price: 300}
  ];
    
  @Output() productAdded = new EventEmitter();

   cartTotal=0;

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: Product) => {
      console.log(product)
       this.addProductToCart(product)

      })

    
  }

  addProductToCart(product: Product){
    this.productAdded.emit(product);
    this.cartItems.push({
      productId: product.id,
      productName: product.name,
      qty:1,
      price: product.price
      })
      this.cartTotal=0
      this.cartItems.forEach(item =>
        {
                 this.cartTotal +=( item.qty * item.price)
        })

  }

}

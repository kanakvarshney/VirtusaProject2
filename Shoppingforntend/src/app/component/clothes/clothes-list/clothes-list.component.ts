import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core';
import {Product} from 'src/app/models/product';
import {MessengerService} from 'src/app/service/messenger.service';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.css']
})
export class ClothesListComponent implements OnInit {

  @Input() productItem: Product
  @Output() productAdded = new EventEmitter();

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {

    

  }

  handleAddToCart(productItem){
  
      this.msg.sendMsg(this.productItem)
  }

}

import { Injectable } from '@angular/core';
import {Observable,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject=new Subject()

   sendMsg(product){
    
       this.subject.next(product);
   }

   getMsg(): Observable<any>
   {
     
    return this.subject.asObservable();

   }

  constructor() { }
}

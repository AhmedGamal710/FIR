import { Component, OnInit, OnDestroy } from '@angular/core';
import { GoodInterface } from 'src/app/interfaces/good.interface';
import { GoddsService } from 'src/app/services/godds.service';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from './../../services/auth.service';
import {  Router } from '@angular/router';

import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{
  goods : GoodInterface [] = []
  GoodsUnsubscribe :Subscription
  add:number = -1
  constructor(private gs:GoddsService,private cs:CartService,private as:AuthService,private router:Router) { }
  ngOnInit() {
    AOS.init();
    this.GoodsUnsubscribe = this.gs.getAllGoods().subscribe(data => {
      this.goods =  data.map(element => {
        return {
          id   :element.payload.doc.id,
          name   :element.payload.doc.data()['name'],
          price   :element.payload.doc.data()['price'],
          photoUrl   :element.payload.doc.data()['photoUrl'],
        }
      })
    })
  }
  ngOnDestroy() {
    this.GoodsUnsubscribe.unsubscribe()
  }
  addToCart( index: number ){
     this.add = +index;
  }
  // + to convert to number  
  buy(amount : number){
    let selectedGood = this.goods[this.add]
    let data = {
      id:selectedGood.id,
      name:selectedGood.name,
      amount: +amount,
      price:selectedGood.price
    }
    this.cs.addToCart(data).then(() => this.add= -1)
  }
}

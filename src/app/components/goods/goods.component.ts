import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GoodInterface } from 'src/app/interfaces/good.interface';
import { GoddsService } from 'src/app/services/godds.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  @ViewChild(`image`,{static: false}) image: ElementRef 
  @ViewChild(`price`,{static: false}) price: ElementRef 

  constructor(private gs:GoddsService) { }

  ngOnInit() {
  

  }
  addNewGood(form :NgForm){
    let  name = ( <GoodInterface> form.value ).name,
        price = ( <GoodInterface> form.value ).price,
        image = ( <HTMLInputElement> this.image.nativeElement ).files[0];
    this.gs.addNewGood(name, price, image).then(msg => console.log(msg));
    console.log(price);

  }
}

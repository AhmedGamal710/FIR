import { Component } from '@angular/core';
import { trigger, transition, group, query, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations :[
    trigger('router',[
      transition('0=>1,1=>0, 0=>2, 2=>0, 0=>3, 3=>0, 0=>4, 4=>0, 0=>5, 5=>0, 1=>2, 2=>1, 1=>3, 3=>1, 1=>4, 4=>1, 1=>5, 5=>1, 2=>3, 3=>2, 2=>4, 4=>2, 2=>5, 5=>2, 3=>4, 4=>3, 4=>5, 5=>4',[
        group([
          query(':enter',[
            style({
              transform:'translateX(100%)'
            }),
            animate(500,style({
              transform:'translateX(0%)'
            }))
          ], { optional: true }),
          query(':leave',[
            style({
              transform:'translateX(0%)'
            }),
            animate(500,style({
              transform:'translateX(100%)'
            }))
          ], { optional: true }),
        ])
      ])
    ])
  ]
})
export class AppComponent {
   
  title = 'firAppKMR';
  name ='islaaaaaam'
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
   <button nbButton *ngIf="!value">{{value }}</button>
   <button nbButton hero status="success" *ngIf="value =='X'">{{value }}</button>
   <button nbButton hero status="info" *ngIf="value == 'O'">{{value }}</button>
    </p>
  `,
  styles: ['button { width: 200px; height: 200px; font-size: 5em !important; }'] 

})
export class SquareComponent  {
 
  @Input() value:'X'| 'O';
  }



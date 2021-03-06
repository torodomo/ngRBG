import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  colors: any[] = [
  'Lavender',
  'LavenderBlush',
  'Plum',
  'Pink',
  'PaleTurquoise',
  'PowderBlue',
  'AliceBlue',
  'Aquamarine'
  ];
  numbers = [
  Math.floor(Math.random() * 6), Math.floor(Math.random() * 6),
  Math.floor(Math.random() * 6), Math.floor(Math.random() * 6),
  Math.floor(Math.random() * 6), Math.floor(Math.random() * 6),
  Math.floor(Math.random() * 6), Math.floor(Math.random() * 6),
  Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)
  ];
}

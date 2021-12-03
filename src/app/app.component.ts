import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Hello';
  public counter = 0;
  public anyCounter = 0;
  public color = 'pink';
  public otherColor = 'brown';
  public letters = '0123456789ABCDEF';
  public changeColorTitle = 'HI HO';


  constructor() { }


  public count(): void {
    this.counter++;

  }
  public anyCount(): void {
    this.anyCounter++;
  }

  getOtherRandomColor(): void {
    this.otherColor = '#';
    for (var i = 0; i < 6; i++) {
      this.otherColor += this.letters[Math.floor(Math.random() * 16)];
    }
  }

  getRandomColor(): void {
    this.color = '#';
    for (var i = 0; i < 6; i++) {
      this.color += this.letters[Math.floor(Math.random() * 16)];
    }
  }
}


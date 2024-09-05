
import { Component } from '@angular/core';
@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  bgcolor = "background-color :white;"
  changeRed(){
    this.bgcolor= "background-color : red"
  }

  changePurple(){
    this.bgcolor= "background-color : purple"
  }

  changeBlue(){
    this.bgcolor= "background-color : blue"
  }
}

import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Output() clickred = new EventEmitter<any>();

  @Output() clickblue = new EventEmitter<any>();

  red() {
    this.clickred.emit("red");
  }
  blue(){
    this.clickblue.emit("blue");
  }

}

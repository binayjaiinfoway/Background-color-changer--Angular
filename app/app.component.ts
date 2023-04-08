import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  color:any;

  title = 'color';


  display($event:any){
    this.color =$event

  }
}

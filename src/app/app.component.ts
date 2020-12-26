import {Component} from '@angular/core';
import {timeInterval, timeout} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-wold';
  colorCode: number = 0;
  tests = ['test1', 'test2'];
  btnClick = 'button is not clicked';
  lastname = '';
  buttonClicked = false;

  constructor() {

  }

  ngOninit() {

  }

  onButtonClicked() {
    this.buttonClicked = true;
    this.btnClick="Btton Now Clicked ";
    this.tests.push('test');
  }

  changeColor() {
    setTimeout(() =>
        this.colorCode = Math.random()
      ,
      6000);
  }

  getColor() {
return 'red';
    // return this.colorCode > 0.5 ? 'red' : 'blue';
  }
}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ratings: number[] = [2, 4.5, 3, 3.5, 4, 5, 1];


  constructor() {
  }

  ngOnInit(): void {
  }

}

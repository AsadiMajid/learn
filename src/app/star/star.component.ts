import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit , OnChanges{
  startWith: number = 85;
  @Input() rating: number ;
  ngOnChanges() {
    debugger
    this.startWith = this.rating * 86 / 5;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

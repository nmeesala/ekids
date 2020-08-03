import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common-service';

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo-card.component.html',
  styleUrls: ['./bingo-card.component.scss']
})
export class BingoCardComponent implements OnInit {
  name;

  constructor(private y: CommonService) {
    this.name = y.pizza;
  }

  ngOnInit(): void {

  }

}

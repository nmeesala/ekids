import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.scss']
})
export class NameCardComponent implements OnInit {

  name:string;

  constructor(private x: CommonService, private router: Router) { }

  ngOnInit(): void {
  }

  addName() {
     this.x.pizza = this.name;

     this.router.navigateByUrl("/bingo");
  }

}

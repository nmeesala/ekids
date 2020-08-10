import { Component, OnInit } from '@angular/core';
import { bingoRunningModel } from '../model';
import { FirebaseService } from '../firebase.service';
import { AppSettings } from '../app.settings';

@Component({
  selector: 'app-number-spin',
  templateUrl: './number-spin.component.html',
  styleUrls: ['./number-spin.component.scss']
})
export class NumberSpinComponent implements OnInit {
  selectedNumber:number;
  _show:boolean = true;
  $bingoRunning:bingoRunningModel;

  constructor(private fireService:FirebaseService) { }

  ngOnInit(): void {
    this.fireService.getBingoRunning().subscribe(d => {
      this.$bingoRunning = d;
      AppSettings.CURRENT_NUMBER = this.$bingoRunning.current_number;
      // if(AppSettings.USER_IDENTITY !== 'Admin'){
      // AppSettings.Speech(this.$bingoRunning.current_number);
      // }
    });
  }

}

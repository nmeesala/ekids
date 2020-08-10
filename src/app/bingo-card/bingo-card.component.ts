import { AppSettings } from './../app.settings';
import { bingoTableModel, bingoSequenceModel, bingoPrizeModel } from './../model';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common-service';
import { FirebaseService } from '../firebase.service';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

declare var require: any;
const BingoGenerator = require("bingo-generator").default;

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo-card.component.html',
  styleUrls: ['./bingo-card.component.scss']
})
export class BingoCardComponent implements OnInit {
  name;
  rows: any[];
  cols: any[];
  data: bingoTableModel[] = [];
  tempData: bingoTableModel[] = [];
  $data: bingoSequenceModel;
  $dataBingoPrize: bingoPrizeModel[] = [];
  _difference: bingoPrizeModel[];
  generator: any;
  rowIndex = 0;
  transaction: any;
  _rippleColor = "#1976d2";
  _showSpinner = false;



  //Door
  constructor(private y: CommonService,
              private fireService: FirebaseService,
              ) {
    this.name = AppSettings.name;

  }

  //Main gate
  ngOnInit(): void {
    this.rows = Array.from(Array(AppSettings.CONFIG.number_of_rows).keys());
    this.cols = Array.from(Array(AppSettings.CONFIG.number_of_cols).keys());
    this.generator = BingoGenerator(AppSettings.CONFIG);

    this.rows.forEach((r) => {
      this.cols.forEach((c) => {
        this.data.push({ row: r, col: c, number: 0, selected: false });
      });
    });
    this.tempData = this.generator.CreateBoard();

  }

  generateCard() {
    this.transaction = new Promise((resolve) => {
      console.log(this.tempData);

      this.tempData.forEach((d: any) => {
        d.forEach((e) => {
          var x = this.data.filter(
            (f) => f.row == this.rowIndex && f.col == e.col
          )[0];
          if (x) {
            x.number = e.number;
          }
        });
        this.rowIndex++;
        if (this.rowIndex === this.rows.length - 1) resolve();
      });
    });


    this.transaction.then(() => {
      //TODO: Perform some logic once the data update is done
      this.fireService.addBingoSequence(this.data, AppSettings.bingocode, this.fireService.name).then(() => {
        this.subscribeService();
      });
    });
  }

  subscribeService() {
    //call the reterieve for the same object back and subscribe the same
    this.fireService.getBingoSequence(this.fireService.name,AppSettings.bingocode).subscribe((data) => {
      AppSettings.BINGO_SEQUENCE = data;
      this.$data = data;
      this._showSpinner = true;
    });
  }

  selected(x: bingoTableModel) {
    if (x.number === AppSettings.CURRENT_NUMBER) {
      x.selected = true;

      this.fireService.updateBingoSequence(this.$data).then(() => {

      });
    }
  }
}

export class bingoTableModel {
  row:number;
  col:number;
  number:number;
  selected:boolean = false;

}

export class bingoModel {
  $id?:any;
  name:string;
  date?:any;
  code:string;
  status:boolean = false;

}

export class bingoSequenceModel {
  $id:string;
  code:string;
  sequence:any[] = [];
  user:any;
  id?:any;
}

export class bingoRunningModel {
  id?:string;
  code:string;
  current_number:number;
  sequence:bingoTableModel[];
  spinner_status:string;
}

export class localStorageModel {
  bingo_code:string;
  bingo_sequence:bingoSequenceModel;
  bingo:bingoModel;
  user_identity:string;
  generated:boolean = false;
}

export class bingoPrizeModel {
  id?:string;
  code:string;
  description:string;
  prize:number;
  status:boolean = false;
  user:string;
}

export class bottomSheetModel {
  COMPONENT:any;
  DURATION?:number = 0;
}

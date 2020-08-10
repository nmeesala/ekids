import { bingoModel, bingoSequenceModel, bottomSheetModel } from './model';
import { BehaviorSubject, fromEventPattern } from 'rxjs';
//import speak from 'spoken/build/spoken.js';



export class AppSettings {

  private static _bingoCode = new BehaviorSubject<string>('');
  private static _userName = new BehaviorSubject<string>('');
  private static _bottomSheetMessage = new BehaviorSubject<string>('');
  private static _bottomSheet = new BehaviorSubject<any>('');

  private static _name = new BehaviorSubject<string>('');

  public static bingocode = '0SpEUfX1dFDZ1YCvKVOG';

  public static InMemory = {
    name: ''
  }

  constructor() {}

  public static CONFIG = {
    "number_of_rows": 3,
    "number_of_cols": 9,
    "numbers_per_col": 4,
    "numbers_per_row": 6,
    "min_numbers_per_col": 1,
    "max_numbers_per_col": 2,
   }

   public static SPINNER_STATUS = {
     "DISPLAY": "D",
     "SPIN": "S",
     "WAIT": "W"
   }

   public static WAIT_SECONDS = 5000;

   public static RANDOM_NUMBER_CONFIG = {
      min:  1,
      max:  100,
      integer: true
   }

   public static CURRENT_NUMBER:number = 0;
   public static USER_IDENTITY:string = null;
   public static USER_IDENTITY_OBSERVABLE() { return this._userName.asObservable(); }
   public static BINGO_CODE_OBSERVABLE() { return this._bingoCode.asObservable(); }
   public static BOTTOM_SHEET_OBSERVABLE() { return this._bottomSheetMessage.asObservable(); }
   public static BOTTOM_SHEET_MESSAGE:string = '';
   public static BINGO_CODE:string = '';
   public static BINGO:bingoModel;
   public static BINGO_SEQUENCE:bingoSequenceModel;
   public static BINGO_GENERATED:boolean = false;
   public static BOTTOM_SHEET_POPUP_OBSERVABLE() { return this._bottomSheet.asObservable(); }

   public static Documents = {
     BINGO:"bingo",
     BINGO_SEQUENCE:"bingo-sequence",
     BINGO_RUNNING:"bingo-running",
     BINGO_PRIZE:"bingo-prize"
   }

   /*
   U - user
   A - Admin
   */
   public static USER_ROLE = 'U'

   /**
    Methods
    */
   public static updateBingoCode(value) {
      this.BINGO_CODE = value;
      this._bingoCode.next(value);
   }

   public static updateUserName(value) {
      this.USER_IDENTITY = value;
      this._userName.next(value);
   }

   public static updateBottomSheetMeesage(value) {
      this.BOTTOM_SHEET_MESSAGE = value;
      this._bottomSheetMessage.next(value);
   }

   //Text To Speach
   public static Speech(message){
    // speak.say(message);
   }

   //Bottom Sheet component
   public static ShowBottomSheet(value:bottomSheetModel){
     this._bottomSheet.next(value);
   }
}

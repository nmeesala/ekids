import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { bingoModel, bingoSequenceModel, bingoRunningModel, bingoPrizeModel } from './model';
import { AppSettings } from '../app/app.settings';
import {formatDate} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public name:string;
  public bingoCode = '0SpEUfX1dFDZ1YCvKVOG';
  constructor(private store: AngularFirestore) { }

  getActiveBingo(id){
    return this.store
			.collection<bingoModel>(AppSettings.Documents.BINGO).doc(id)
			.snapshotChanges()
			.pipe(
				map((bingo) => {
					  const data = bingo.payload.data() as bingoModel;
							const id = bingo.payload.id;
              return { id, ...data };
        })
			);
  }

  getAllBingos(){
    return this.store
    .collection<bingoModel>(AppSettings.Documents.BINGO)
    .snapshotChanges()
    .pipe(
      map((bingos) => {
          return bingos.map((bingo:any) => {
             const id = bingo.payload.doc.id;
             return { id, ...bingo.payload.doc.data() }
          })
      })
    );
  }

  getBingoSequence(user, code) {
    return this.store
               .collection(AppSettings.Documents.BINGO_SEQUENCE,
                          (ref) => ref.where('user','==', user)
                                      .where('code','==', code)
                                        .limit(1))
              .snapshotChanges()
              .pipe(
                map((bingo) => {
                    const data = bingo[0].payload.doc.data() as bingoSequenceModel;
                      const id = bingo[0].payload.doc.id;
                      return { id, ...data };
                })
              );
  }

  addBingoSequence(sequence, bingo_code, user) {
    return this.store.collection<bingoSequenceModel>(AppSettings.Documents.BINGO_SEQUENCE).add({
      code: bingo_code,
      sequence: sequence,
      user: user,
      $id:''
    }).then(() => {
    });
  }

  addBingoSession(data:bingoModel){
    return this.store.collection<bingoModel>(AppSettings.Documents.BINGO).add({
      code: data.code,
      name: data.name,
      date: formatDate(new Date(), 'MM/dd/yyyy', 'en') ,
      status:data.status
    });
  }

  updateBingoSequence(data:bingoSequenceModel){
    return this.store
        .collection(AppSettings.Documents.BINGO_SEQUENCE)
        .doc(data.id)
        .update({
          sequence:data.sequence
        });
  }

  updateBingo(status:boolean){
    this.store
    .collection(AppSettings.Documents.BINGO)
    .doc(AppSettings.BINGO_CODE)
    .update({
      status:status
    });
  }

  updateBingoRunning(data:bingoRunningModel){
    return this.store
        .collection(AppSettings.Documents.BINGO_RUNNING)
        .doc(data.id)
        .update({
          sequence:data.sequence,
          current_number: data.current_number,
          spinner_status: data.spinner_status
        });
  }


  getBingoUsers() {
    return this.store
        .collection(AppSettings.Documents.BINGO_SEQUENCE, ref => ref.where('code','==', this.bingoCode))
        .snapshotChanges()
        .pipe(
          map((bingos) => {
             return  bingos.map((bingo:any) => {
                const id = bingo.payload.doc.id;
                return { id, ...bingo.payload.doc.data() }
              })
            })
        );
  }

  addBingoRunning(sequence,_override = undefined) {
    this.store.collection<bingoRunningModel>(AppSettings.Documents.BINGO_RUNNING).add({
        code: _override == undefined ? AppSettings.BINGO_CODE : _override,
        current_number:0,
        sequence:sequence,
        spinner_status:"W"
    }).then(() => {
      //console.log("Loaded running sequence...")
    }).catch(error =>console.log(error));
  }

  getBingoRunning() {
    return this.store
               .collection(AppSettings.Documents.BINGO_RUNNING,
                          (ref) => ref.where('code','==', this.bingoCode)
                                      .limit(1))
              .snapshotChanges()
              .pipe(
                map((bingo) => {
                  if(bingo.length === 0) { return null };

                    const data = bingo[0].payload.doc.data() as bingoRunningModel;
                      const id = bingo[0].payload.doc.id;
                      return { id, ...data };
                })
              );
  }

  getBingoPrize(){
    return this.store
    .collection(AppSettings.Documents.BINGO_PRIZE, ref => ref.where('code','==', AppSettings.BINGO_CODE))
    .snapshotChanges()
    .pipe(
      map((bingos) => {
         return  bingos.map((bingo:any) => {
            const id = bingo.payload.doc.id;
            return { id, ...bingo.payload.doc.data() }
          })
        })
    );
  }

getBingoPrizeChildChange() {
  return this.store.doc(AppSettings.Documents.BINGO_PRIZE);
}

addBingoPrize(data:bingoPrizeModel){
 return this.store.collection<bingoPrizeModel>(AppSettings.Documents.BINGO_PRIZE).add({
     code: data.code,
     description: data.description,
     prize: data.prize,
     status: true,
     user: AppSettings.USER_IDENTITY
});
}

  updateBingoPrize(id,user){
    return this.store
        .collection(AppSettings.Documents.BINGO_PRIZE)
        .doc(id)
        .update({
          user: user,
          status: true
        });
  }
}



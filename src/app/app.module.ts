import { FilterRowPipe } from './filter-pipe';
import { FirebaseService } from './firebase.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BingoCardComponent } from './bingo-card/bingo-card.component';
import { NameCardComponent } from './name-card/name-card.component';
import { CommonService } from './common-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NumberSpinComponent } from './number-spin/number-spin.component';

const MATERIAL_COMPONENTS = [
  MatTableModule,
  MatCardModule,
  MatGridListModule,
  MatMenuModule,
  MatTabsModule,
  MatButtonModule,
  MatInputModule,
  MatBottomSheetModule,
  MatRippleModule,
  MatFormFieldModule,
  MatSlideToggleModule
]

@NgModule({
  declarations: [
    AppComponent,
    BingoCardComponent,
    NameCardComponent,
    FilterRowPipe,
    NumberSpinComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.fireBase),
    AngularFirestoreModule,
    MATERIAL_COMPONENTS
  ],
  providers: [ FirebaseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

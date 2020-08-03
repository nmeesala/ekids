import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BingoCardComponent } from './bingo-card/bingo-card.component';
import { NameCardComponent } from './name-card/name-card.component';
import { CommonService } from './common-service';


@NgModule({
  declarations: [
    AppComponent,
    BingoCardComponent,
    NameCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ CommonService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

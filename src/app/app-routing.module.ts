import { BingoCardComponent } from './bingo-card/bingo-card.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameCardComponent } from './name-card/name-card.component';


const routes: Routes = [
  { path:'', redirectTo:"home", pathMatch:'full'  },
  { path:'home', component: NameCardComponent  },
  { path: 'bingo', component: BingoCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

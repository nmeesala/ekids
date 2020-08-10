import { Component } from '@angular/core';
import { AppSettings } from './app.settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eKids';
  name:any;
  _showLogout:boolean = true;
  //variable
  welcome = 'Angular - eKids';

  constructor() {
    AppSettings.USER_IDENTITY_OBSERVABLE().subscribe((u) => {
      this.name =  u;
    });
  }

  logout() {}

}

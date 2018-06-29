import { Component } from '@angular/core';
import {Observable} from 'rxjs';

import '../assets/css/styles.scss';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public welcomeMsg: any;

  ngOnInit() {
  }
 
  constructor() { }
}
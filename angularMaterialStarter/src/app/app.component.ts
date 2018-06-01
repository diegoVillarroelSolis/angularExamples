import { Component } from '@angular/core';
import {Observable} from 'rxjs';

import '../assets/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public welcomeMsg: any;

  ngOnInit() {
  }
 
  constructor() { }
}
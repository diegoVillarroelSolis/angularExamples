import { Component } from '@angular/core';
import {AuthenticationService} from "./login/shared/authentication.service";
import {Observable} from 'rxjs/Rx';
import '../assets/css/styles.css';
import '../../node_modules/primeng/resources/themes/voclain/theme.css';
import '../../node_modules/primeng/resources/primeng.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
// import '../assets/css/styles.css';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AuthenticationService ]

})
export class AppComponent {

  ngOnInit() { }
  constructor() { }
}
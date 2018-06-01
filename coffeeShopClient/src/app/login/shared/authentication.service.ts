import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {Observable} from "rxjs";
import {LoginObject} from "./login-object.model";
import {Session} from "../../core/models/session.model";

@Injectable()
export class AuthenticationService {
  private basePath = '/api/authenticate/'; //here api of backend
  private basePath1 = 'http://192.168.0.110:57798/api/login'; //here api of backend
 
  constructor(private http: Http,private httpClient: HttpClient) {}
   
  login(loginObj: LoginObject): Observable<Boolean> {
    return this.http.post(this.basePath + 'login', loginObj).map(
      (response) => {
        let body = response.json();
        return body.validation;
      }
    )
  }

  logout(): Observable<Boolean> {
    return this.http.post(this.basePath + 'logout', {}).map(
      (response) => {
        let body = response.json();
        return body;
      }
    )
  }  
}
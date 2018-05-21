import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { User } from './user.model';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class LoginService {
 
    constructor(private http:HttpClient) {}
 
    validate(user: User): Observable<Object> {
        return this.http.get('http://192.168.0.103:6779/api/login/validate?user='+user.name+'&password='+user.password);
    }
}
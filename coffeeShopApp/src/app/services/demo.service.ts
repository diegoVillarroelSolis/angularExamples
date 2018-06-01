import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class DemoService {
 
    constructor(private http:HttpClient) {}
 
    getMessages() {
        return this.http.get('http://localhost:52217/api/homepage');
    }
}
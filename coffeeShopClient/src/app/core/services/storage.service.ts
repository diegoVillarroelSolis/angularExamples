import {Injectable} from "@angular/core";
import { Router } from '@angular/router';
import {Session} from "../models/session.model";
import {User} from "../models/user.model";

@Injectable()
export class StorageService {

  private localStorageService;
  private currentSession : Session = null;
  private session: boolean;

  constructor(private router: Router) {
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();
    if(this.currentSession==null) {
      this.session = false;
    } else{this.session = true; }
  }

  setCurrentSession(session: Session): void {
    this.currentSession = session;
    this.localStorageService.setItem('currentUser', JSON.stringify(session));
    this.session = true;
  }

  loadSessionData(): Session{
    var sessionStr = this.localStorageService.getItem('currentUser');
    return (sessionStr) ? <Session> JSON.parse(sessionStr) : null;
  }

  getCurrentSession(): Session {
    return this.currentSession;
  }

  removeCurrentSession(): void {
    this.localStorageService.removeItem('currentUser');
    this.currentSession = null;
    this.session=false;

  }
  
  getCurrentUser(): User {
    var session: Session = this.getCurrentSession();
    return (session && session.user) ? session.user : null;
  };

  logout(): void{
    this.removeCurrentSession();
    this.router.navigate(['/juice']);
  }
  getSession(){
    return this.session;
  }

}

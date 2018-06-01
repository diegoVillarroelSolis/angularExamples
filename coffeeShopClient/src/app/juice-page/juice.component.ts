import {Component} from "@angular/core";
import {StorageService} from "../core/services/storage.service";
import {User} from "../core/models/user.model";
import {AuthenticationService} from "../login/shared/authentication.service";
@Component({
  selector: 'home',
  templateUrl: 'juice.component.html',
  styleUrls: ['./juice.component.css']

})
export class JuiceComponent {
   public user: User;
  session:boolean;  
   constructor(private storageService: StorageService, private authenticationService: AuthenticationService) { }
  ngOnInit() {
       this.session=this.storageService.getSession();
      if(this.session){
           this.user = this.storageService.getCurrentUser();
      }
  }
   public logout(): void{
    this.session=false;
    this.authenticationService.logout().subscribe(
        response => {if(response) {this.storageService.logout();}}
    );
   }
}

import { Component } from '@angular/core';
import { User } from './user.model';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  private isValidated: boolean;
  // //private user: User;
  user: User = new User();
  constructor(private loginService: LoginService) {}

  public validate(): void {
    this.loginService.validate(this.user).subscribe(
      data => {
        if (data) {
          this.user.isAuthenticated = true;
          console.log("validated user...");
        }
      },
      err => console.log(err),
      () => console.log("Validating user")
    );
  }
}
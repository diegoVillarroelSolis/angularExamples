import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {Validators, FormGroup, FormBuilder} from "@angular/forms";

import {LoginObject} from "./shared/login-object.model";
import {Session} from "../core/models/session.model";
import {AuthenticationService} from "./shared/authentication.service";
import {StorageService} from "../core/services/storage.service";

// Importados para validar la respuesta de la web api-->true:
import {USERS} from "../core/mocks/mock-users";
import {User} from "../core/models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  userSession: Session;
  public loginForm: FormGroup;
  public submitted: Boolean = false;
  public error: {code: number, message: string} = null;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private storageService: StorageService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      // username: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(6)]],
    })
  }
  
  public submitLogin(): void {
    const p=this.loginForm.value
    this.submitted = true;
    this.error = null;
    
    if(this.loginForm.valid){
      this.authenticationService.login(new LoginObject(this.loginForm.value)).subscribe(
        data => this.correctLogin(data),
        error => console.log("Se produjo un error")
      )
    }
  }

  private correctLogin(data: Boolean){
    if(data){
      var data1 : Session =new Session();
      let found: User = USERS.find((user: User) => {return ("anita" === user.username);});
      data1.user=found;
      this.storageService.setCurrentSession(data1);
      this.router.navigate(['/juice']);
    }
    else{
      this.error= {code : 2 , message : "Codigo AC incorrecto"};
    }
  }
    
}

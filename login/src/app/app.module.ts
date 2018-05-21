import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login/login.service';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent
  ],
  providers: [LoginService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
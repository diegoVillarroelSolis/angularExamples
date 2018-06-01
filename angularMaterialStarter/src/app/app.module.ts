import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule, 
    HttpClientModule,     
    BrowserAnimationsModule,
    MatCardModule, 
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
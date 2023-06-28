import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './view/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './view/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './view/templates/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

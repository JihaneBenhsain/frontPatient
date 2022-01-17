import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PatientsComponent } from './components/patients/patients.component';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { ConsultationsComponent } from './components/consultations/consultations.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Routes
import { APP_ROUTING } from './app.routes';
import { AppRoutingModule } from './app-routing.module';

//Dependecies

//Services
import { IxchelV2Service } from "src/app/services/API_Ixchelv2/ixchel_v2.service";
import { ContextualAreaService } from "src/app/services/Contextual_area_visible/contextual-area.service";

//Components Views
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { GuessComponent } from './views/layout/guess/guess.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GuessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    IxchelV2Service,
    ContextualAreaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

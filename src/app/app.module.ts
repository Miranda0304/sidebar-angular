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
import { ToastModule } from 'ng-uikit-pro-standard';

//Services
import { IxchelV2Service } from "src/app/services/API_Ixchelv2/ixchel_v2.service";
import { ContextualAreaService } from "src/app/services/Contextual_area_visible/contextual-area.service";

//Components Views
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SolutionComponent } from './views/pages/guess/solution/solution.component';
import { ResourceComponent } from './views/pages/guess/resource/resource.component';
import { ContactComponent } from './views/pages/guess/contact/contact.component';
import { HomeComponent } from './views/pages/doctor/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SolutionComponent,
    ResourceComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule.forRoot()
  ],
  providers: [
    IxchelV2Service,
    ContextualAreaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

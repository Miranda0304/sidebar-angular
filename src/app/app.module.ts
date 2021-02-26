import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component'
import { APP_ROUTING } from './app.routes';
import { ExpedientComponent } from './views/expedient/expedient.component';
import { InfobarComponent } from './shared/infobar/infobar.component';
import { UsersComponent } from './views/users/users.component';
import { AttachedComponent } from './views/attached/attached.component';
import { InformationComponent } from './views/information/information.component';
import { ExpedientAuxComponent } from './views/expedient-aux/expedient-aux.component';
import { UsersAuxComponent } from './views/users-aux/users-aux.component';
import { AttachedAuxComponent } from './views/attached-aux/attached-aux.component';
import { InformationAuxComponent } from './views/information-aux/information-aux.component';
import { Expedient1Component } from './views/expedient1/expedient1.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

//Services
import { InfobarService } from "./services/inforbar_visible/visible.service";
import { ObjectsService } from "./services/objects_methods/objects.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExpedientComponent,
    InfobarComponent,
    UsersComponent,
    AttachedComponent,
    InformationComponent,
    ExpedientAuxComponent,
    UsersAuxComponent,
    AttachedAuxComponent,
    InformationAuxComponent,
    Expedient1Component,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule,
    CommonModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule
  ],
  providers: [
    InfobarService,
    ObjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

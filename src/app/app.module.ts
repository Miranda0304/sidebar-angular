//Angular
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Routes
import { APP_ROUTING } from './app.routes';
import { AppRoutingModule } from './app-routing.module';

//Dependecies
import { ToastModule } from 'ng-uikit-pro-standard';

//Services
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";

//Shared Components
import { MainModule } from 'src/app/views/layout/main/main.module';

//Components Views
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { SolutionComponent } from './views/pages/guess/solution/solution.component';
import { ResourceComponent } from './views/pages/guess/resource/resource.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SolutionComponent,
    ResourceComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    APP_ROUTING,
    MainModule,
    HttpClientModule,
    FormsModule,
    ToastModule.forRoot(),
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

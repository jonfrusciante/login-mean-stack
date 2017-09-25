import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { NgSemanticModule } from 'ng-semantic/ng-semantic';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routing.module';
import { SignupComponent } from './signup/signup.component';
import { GoogleAuthService } from './services/google-auth.service';
import { baseUrl } from './shared/baseurl';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { UserService } from './services/user-service.service';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SignupComponent,
    DashboardComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    NgSemanticModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
      RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [GoogleAuthService,  {provide: 'BaseURL', useValue: baseUrl} , UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

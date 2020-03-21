import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { RecetaComponent } from './receta/receta.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './service/data.service';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';



const RouterConfig: Routes =[
  {"path": "", "component": HomeComponent},
  {"path": "home", "component": HomeComponent},
  {"path": "login", "component": LoginComponent},
  {"path":"register", "component": RegisterComponent},
  {"path":"user", "component":UserComponent},
  {"path":"receta", "component":RecetaComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    RecetaComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( RouterConfig, {useHash:true}),
    FormsModule,
    HttpClientModule

  ],
  providers: [ DataService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

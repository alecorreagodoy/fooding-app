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
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { Error404Component } from './error404/error404.component';
import { CreateRecetaComponent } from './create-receta/create-receta.component';
import { RecetaInversaComponent } from './receta-inversa/receta-inversa.component';



const RouterConfig: Routes =[
  {"path": "", "component": HomeComponent},
  {"path": "home/:search", "component": HomeComponent},
  {"path": "home", "component": HomeComponent},
  {"path": "login", "component": LoginComponent},
  {"path":"register", "component": RegisterComponent},
  {"path":"user", "component":UserComponent},
  {"path":"user/:_id", "component":UserComponent},
  {"path":"receta", "component":RecetaComponent},
  {"path":"receta/:author", "component":RecetaComponent},
  {"path":"receta/:_id", "component":RecetaComponent},
  {"path":"creaReceta", "component": CreateRecetaComponent},
  {"path":"recetaByingrediente", "component":  RecetaInversaComponent},
  {"path":"**", "component":Error404Component}


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    RecetaComponent,
    NavBarComponent,
    FooterComponent,
    CardsComponent,
    Error404Component,
    CreateRecetaComponent,
    RecetaInversaComponent
    
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

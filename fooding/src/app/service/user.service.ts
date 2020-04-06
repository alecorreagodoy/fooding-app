import { Injectable } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { DataService}  from  '../service/data.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  myApi: string = "";
  usuarios:  any=[];
  recetas: any=[]

  constructor( public _http: HttpClient, public _route: ActivatedRoute, public _router: Router ) {
       let httpConfig: object ={
      "headers": new HttpHeaders({
      "content-type": "application/json"
  
    })
 
  }
  //this.showUser(),httpConfig;
}

showUser(_id:string){

  this._http.get(`${this.myApi}/usuario/${_id}`)
    .subscribe((response)=>{
      this.usuarios.push(response);
     
})
}
showRecetasUser(){
  this._http.get(`${this.myApi}/recetaAutor`)
  .subscribe((response)=>{
    console.log(response)
    
    
    this.recetas = response;
    
   console.log("buscar la patata caliente")
})
}

  isLogged = false;
}

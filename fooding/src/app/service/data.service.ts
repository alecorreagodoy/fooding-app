import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})

export class DataService {

  
  myApi: string = "http://localhost:3000";
recetas:  any= [];
usuarios:  any=[];
newReceta: any=[]
 

  constructor(public _http: HttpClient, public _route: ActivatedRoute, public _router: Router) { 
    let httpConfig: object ={
      "headers": new HttpHeaders({
      "content-type": "application/json"
  
    })
    }
    this.showRecetas(),httpConfig;
    //this.showUser(), httpConfig

  }
  
  showRecetas(){
    this._http.get(`${this.myApi}/recetaTodas`)
    .subscribe((response)=>{
      this.recetas = response;
      
     
  })
  }


addReceta(recetas){
  var ing = recetas.ingredientes[0].split(/\r?\n/g);
  debugger
  recetas.ingredientes = ing;
  this._http.post(`${this.myApi}/crearReceta`, recetas)//este observable se resolvera cuando s
    .subscribe( (response)=>{
      this.newReceta.push(response);

      
      console.log(response)

  })
  
}
}


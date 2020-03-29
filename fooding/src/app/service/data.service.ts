import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {  OnInit } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class DataService  {

  
  myApi: string = "http://localhost:3000";
recetas:  any= [];
usuarios:  any=[];
newReceta: any=[];
receta: any=[]
imgReceta: string;
 

  constructor(public _http: HttpClient, public _route: ActivatedRoute, public _router: Router) { 
    let httpConfig: object ={
      "headers": new HttpHeaders({
      "content-type": "application/json"
  
    })
    }
  
  }
 
  showRecetas(search){
    this._http.get(`${this.myApi}/recetaInversa/${search}`)
    .subscribe((response)=>{
      this.recetas = response;
      
     
  })
  }


addReceta(recetas){
  var ing = recetas.ingredientes.split(/\r?\n/g);
 
  recetas.ingredientes = ing;
  this._http.post(`${this.myApi}/crearReceta`, recetas)//este observable se resolvera cuando s
    .subscribe( (response)=>{
      this.newReceta.push(response);

      
     
      if(response['_id']){
        this._router.navigateByUrl('/receta/'+response['_id']);
      }
  })
  
}
getReceta(id){
  //this.receta = this.receta[id]
  this._http.get(`${this.myApi}/receta/${id}`)

  .subscribe( (response)=>{
 
    this.receta = [];

    this.receta = response;
   

})

}


uploadImage(data){
  //console.log(Files.foo);
      this._http.post(`${this.myApi}/upload`, {'file': data.image})
      .subscribe((response) => {
         
      })  
  }
}


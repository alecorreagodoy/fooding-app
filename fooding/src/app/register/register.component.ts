import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public _http: HttpClient, public _router:Router) { }

  data={"userName": "",
        "email": "",
        "password": ""

  };
  //a mejorar
  submit(){
    this._http.post("/registrarUsuario", this.data)
    .subscribe((response)=>{
      console.log(response)
      this._router.navigate(["/login"])
    })
  }

  ngOnInit(): void {
  }

}

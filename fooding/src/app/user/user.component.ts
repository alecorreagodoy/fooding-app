import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService}  from  '../service/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  autorReceta: string=""
  constructor(public _route : ActivatedRoute, public _data : UserService) {
   
    this._route.paramMap.subscribe(
      (params: ParamMap) => {
        _data.showUser(params.get("_id"))
       
      }
    ) 
    this.autorReceta = _route.snapshot.params["author"];

    _data.showRecetasUser()
}

 
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService}  from  '../service/data.service'

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {
idReceta: string=""

  constructor(public _route : ActivatedRoute, public _data : DataService) { 
    this.idReceta = _route.snapshot.params["_id"];
    
    _data.getReceta(this.idReceta);


  }

  ngOnInit(): void {
  }
 
}

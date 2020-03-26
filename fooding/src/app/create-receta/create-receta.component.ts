import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService}  from  '../service/data.service'
@Component({
  selector: 'app-create-receta',
  templateUrl: './create-receta.component.html',
  styleUrls: ['./create-receta.component.css']
})
export class CreateRecetaComponent implements OnInit {
  formData: object = {
  
  }
  constructor( public _route : ActivatedRoute, public _data : DataService ) { }

  ngOnInit(): void {
    
  }
  submitData(){
    
    this._data.addReceta(this.formData)

  }

}

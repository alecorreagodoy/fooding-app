import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService}  from  '../service/data.service'
@Component({
  selector: 'app-create-receta',
  templateUrl: './create-receta.component.html',
  styleUrls: ['./create-receta.component.css']
})
export class CreateRecetaComponent implements OnInit {
  formData: object = {}
  constructor( public _route : ActivatedRoute, public _data : DataService ) { }

  ngOnInit(): void {
    
  }
  submitData(){
    
    this._data.addReceta(this.formData)
  
  }
  submitImage(){
    this._data.uploadImage(this.formData);
}

onFileChanged(event) {
  //console.log(Files.foo);
   this.formData['image'] = event.target.files[0]
   console.log(this.formData)
}

}

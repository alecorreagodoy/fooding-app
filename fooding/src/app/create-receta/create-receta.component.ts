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
    if (this.formData['files'] === undefined) {
      this.formData['files'] = [];
    }
    
    var fileName = event[0].name;
    var fileList = this.formData['files'];
    var file = event[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      fileList.push({ fileName: fileName, content: reader.result.toString() });
    };

    reader.readAsDataURL(file);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService}  from  '../service/data.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor( public _http: HttpClient, public  _route : ActivatedRoute, public _data : DataService) { 

  }
  ngOnInit(): void {
    let httpConfig: object ={
      "headers": new HttpHeaders({
      "content-type": "application/json"
  
    })
    }
    let search = this._route.snapshot.paramMap.get('search');
    if(search=== null){
      search = ""
    }
    this._data.showRecetas(search),httpConfig;
    //this.showUser(), httpConfig
    
  }


}

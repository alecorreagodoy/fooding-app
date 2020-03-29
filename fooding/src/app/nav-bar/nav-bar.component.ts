import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent  {

formData = {}
  constructor(public _http: HttpClient, public _route: ActivatedRoute, public _router: Router, public routerModule: RouterModule ) { 

    
  }
search( ){
  let search = this.formData['search'];

  if(search === undefined){
    search = ""
  }
  search = search.split(' ').join('|')
  this._router.navigateByUrl(`/home/${search}`)
}
 

}

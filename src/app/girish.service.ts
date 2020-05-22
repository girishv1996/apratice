import { Injectable } from '@angular/core';
import { HttpClientModule, HttpParams }    from '@angular/common/http';

import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class GirishService {
  constructor(private httpClient:HttpClient) { }
  
  API_KEY = 'add4d51755f547e381fd5338aef67a43';
  
   /*getNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }*/

  public getResults()
  {
    return this.httpClient.get("http://localhost/JUMP/aangular.php");
  }
  
  public see(ht:string)
  {
    
    let param1=new HttpParams().set('ht',ht);
    return this.httpClient.get("http://localhost/JUMP/angular.php?",{params:param1});
  }
  
}

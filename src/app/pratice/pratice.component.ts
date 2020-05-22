import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { GirishService } from './../girish.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pratice',
  templateUrl: './pratice.component.html',
  styleUrls: ['./pratice.component.css']
})
export class PraticeComponent implements OnInit {

  articles;
  results:any;

  constructor(private apiService:GirishService ) { }
  /*ngOnInit() {
    this.apiService.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }*/
  ngOnInit() {
    this.apiService.getResults().subscribe((data)=>{
      console.log(data);
      this.results = data;
    });
  }

}

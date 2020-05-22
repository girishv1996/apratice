
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router'; 

import { Component, OnInit ,Input} from '@angular/core';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  results =[{ name :"girish", marks:100 ,age:23},
  { name :"varun", marks:85 ,age:21},
  { name :"chaitanta", marks:10 ,age:25},
  { name :"srikar", marks:50 ,age:24},
  { name :"deepthi", marks:90 ,age:25},


]
@Input() check:any;
haiGirish()
{
  alert('hai');
  this.router.navigate(['home']);
}
title='results are announced';
constructor(private router: Router){
}

  ngOnInit() {
  }

}

import { GirishService } from './../girish.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})

export class ExamComponent {
  girish = new FormGroup({
    fname: new FormControl(''),
});
  results1:any;
  c:boolean=false;
  
  
constructor(private apiService:GirishService ) { }
onSubmit() {
  this.c=true;
    //alert(this.girish.get('fname').value);
    this.apiService.see(this.girish.get('fname').value).subscribe((data)=>{
      console.log(data);
      this.results1 = data;
    });
  }

  


}

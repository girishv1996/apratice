import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  girish= new FormGroup({
    fname: new FormControl
    (
      null, 
    [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(8)
    ]
     ),
    lname: new FormControl(''),
    age: new FormControl(''),
    mail:new FormControl(''),
  });

  submitDetails()
{
  console.log(this.girish.value);
alert('details submitted');
}


  constructor() { }

  ngOnInit() {
  }
  

}

import { Component, OnInit } from '@angular/core';
import { WelcomeService } from '../welcome.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public service:WelcomeService)
{
service.sayHai();
}

  ngOnInit() {
  }

}

import { WelcomeService } from './welcome.service';
import { ResultsComponent } from './results/results.component';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1 = 'contact me at 9666654204';
  c='contact me at 9666654204';
  show:boolean=true;
constructor(public service:WelcomeService)
{
service.sayHai();
}
  
}

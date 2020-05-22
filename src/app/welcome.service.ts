import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {
  sayHai()
  {
  alert('welcome to our website.Thank you');
  }

  constructor() { 
    
  }
}

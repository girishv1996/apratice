import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WelcomeService } from './welcome.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ResultsComponent } from './results/results.component';
import { HomeComponent } from './home/home.component';
import { PraticeComponent } from './pratice/pratice.component';
import { ConvertPipe } from './convert.pipe';
import { RegisterComponent } from './register/register.component';
import { ExamComponent } from './exam/exam.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ResultsComponent,
    HomeComponent,
    PraticeComponent,
    ConvertPipe,
    RegisterComponent,
    ExamComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [WelcomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

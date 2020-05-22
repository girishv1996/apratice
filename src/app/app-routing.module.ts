import { ExamComponent } from './exam/exam.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PraticeComponent } from './pratice/pratice.component';


const routes: Routes = [{path: '',pathMatch: 'full', component:HomeComponent},
  {path: 'contact',pathMatch: 'full', component:ContactComponent},
{path: 'about',pathMatch: 'full', component:AboutComponent},
{path: 'results',pathMatch: 'full', component:ResultsComponent},
{path: 'home',pathMatch: 'full', component:HomeComponent},
{path: 'register',pathMatch: 'full', component:RegisterComponent},
{path: 'exam',pathMatch: 'full', component:ExamComponent},
{path: 'news',pathMatch: 'full', component:PraticeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

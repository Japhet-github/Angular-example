import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// imported Angular components 
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

// the first route is for redirecting the empty path to the home component,
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'}, // Home page to display when first visit. 
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

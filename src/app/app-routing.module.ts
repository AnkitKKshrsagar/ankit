import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full',
  },

  {
    path: 'home', component: HomeComponent,
  },

  {
    path: 'about-us', component: AboutUsComponent, pathMatch: 'full' 
  },

  {
    path: 'contact-us', component: ContactUsComponent,
  },

  {
    path: 'services', component: ServicesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

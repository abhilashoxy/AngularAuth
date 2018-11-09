import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './Home/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './Home/navigation/navigation.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Login',      component:LoginComponent },
  
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
     
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import {FormBuilder , ReactiveFormsModule , FormGroup} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaqComponent,
    ContactComponent,
    FormComponent,
    LoginComponent,

   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'faq', component: FaqComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'form', component: FormComponent},
      {path: 'login' , component: LoginComponent},
      
    ]),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule

    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

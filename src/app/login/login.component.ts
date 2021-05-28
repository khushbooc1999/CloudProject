import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , Validators, NG_VALIDATORS, NG_ASYNC_VALIDATORS, FormBuilder} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  

  constructor( private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {

    this.loginForm=this.fb.group(
      {
        email : ['', [Validators.required ]],
        password :['',[Validators.required ]],
      }
    );
  }
onLogin()
{
  
}
  
}

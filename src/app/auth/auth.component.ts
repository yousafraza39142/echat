import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  email: string;
  password: string;
  isLoading = false;


  options: AnimationOptions = {
    path: '../../assets/login.json',
  };
  styles: Partial<CSSStyleDeclaration> = {
    width: '300px',
    height: '300px',

  };

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(loginForm: NgForm): void {
    this.isLoading = true;
    setTimeout( () => this.isLoading = false , 2000);
    console.log(loginForm);
  }
}

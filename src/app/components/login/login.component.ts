import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  pseudo!: string
  pwd! : string

  error! : string
  constructor(
    private authService: AuthService,
    private router : Router
  ) {

  }

  login() {
    if(this.authService.login(this.pseudo, this.pwd)){
      this.router.navigate(["listfan"])
    }
    else {
      this.error = "pseudo ou mot de passe invalide!"
    }
  }

}

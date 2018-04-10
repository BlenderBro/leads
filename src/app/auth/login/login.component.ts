import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';
 
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    
    email: string;
    password: string;

    constructor(public authService: AuthService) { }

    // Auth methods

    login(){
        this.authService.login(this.email, this.password);
        this.email = this.password = '';
    }

    signup() {
        this.authService.signup(this.email, this.password);
        this.email = this.password = '';
      }

}

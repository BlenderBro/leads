import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../../auth/login/login.component';
import { AuthService } from '../../auth/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(public dialog: MatDialog, public authService: AuthService){}

    openLogIn(){
        let dialogRef = this.dialog.open(LoginComponent, {
            width: '400px', 
            height: '480px',
            data: 'txt is passed into the blabla'
        });

        dialogRef.afterClosed().subscribe( result => {
            console.log('closed');
        })
    }

    logout(){
        this.authService.logout();
    }

  ngOnInit() {
  }

}

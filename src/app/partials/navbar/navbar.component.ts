import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../../auth/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(public dialog: MatDialog){}

    openLogIn(){
        let dialogRef = this.dialog.open(LoginComponent, {
            width: '600px', 
            height: '400px',
            data: 'txt is passed into the blabla'
        });

        dialogRef.afterClosed().subscribe( result => {
            console.log('closed: ');
        })
    }

  ngOnInit() {
  }

}

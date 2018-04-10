import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
// Firebase crap
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './auth/auth-service.service';



@NgModule({
    declarations: [
        AppComponent,
        RoutingComponents,
        NavbarComponent

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }

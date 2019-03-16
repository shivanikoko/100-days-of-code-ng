import { BrowserModule, Title } from '@angular/platform-browser';
import  { FormsModule}  from  '@angular/forms';  
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { KokoComponent } from './koko/koko.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { ShowForComponent } from './show-for/show-for.component';
import  { KokoService}  from  './koko.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    KokoComponent,
    SideBarComponent,
    ShowForComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    Title,
    KokoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

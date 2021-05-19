import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //Importa Il modulo http

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformazioniComponent } from './informazioni/informazioni.component';
import { AssistenzaComponent } from './assistenza/assistenza.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ChangeForgotPasswordComponent } from './change-forgot-password/change-forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    InformazioniComponent,
    AssistenzaComponent,
    LoginComponent,
    ChangeForgotPasswordComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //Importa Il modulo http

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformazioniComponent } from './informazioni/informazioni.component';
import { AssistenzaComponent } from './assistenza/assistenza.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InformazioniComponent,
    AssistenzaComponent
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

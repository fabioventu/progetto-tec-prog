import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformazioniComponent } from './informazioni/informazioni.component';
import { AssistenzaComponent } from './assistenza/assistenza.component';

@NgModule({
  declarations: [
    AppComponent,
    InformazioniComponent,
    AssistenzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

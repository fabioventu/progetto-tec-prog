import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistenzaComponent } from './assistenza/assistenza.component';
import { InformazioniComponent } from './informazioni/informazioni.component';
const routes: Routes = [
  { path: 'assistenza', component: AssistenzaComponent },
  { path: 'informazioni', component: InformazioniComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

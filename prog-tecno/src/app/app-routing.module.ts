import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistenzaComponent } from './assistenza/assistenza.component';
import { InformazioniComponent } from './informazioni/informazioni.component';
import { ChangeForgotPasswordComponent } from './change-forgot-password/change-forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'assistenza', component: AssistenzaComponent },
  { path: 'informazioni', component: InformazioniComponent},
  { path: 'login', component : LoginComponent},
  { path: 'forgotPassword', component : ForgotPasswordComponent},
  { path: 'changePassword', component : ChangePasswordComponent},
  { path: 'changeForg', component: ChangeForgotPasswordComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatientsComponent} from "./components/patients/patients.component";
import {ConsultationsComponent} from "./components/consultations/consultations.component";

const routes: Routes = [
  { path: 'patient', component: PatientsComponent },
  { path: 'consultation', component: ConsultationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PatientsComponent, ConsultationsComponent]

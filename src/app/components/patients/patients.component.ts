import { Component, OnInit } from '@angular/core';
import {PatientService} from "../../services/patient.service";
import {Patient} from "../../models/patient";
import {filter} from "rxjs";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patients: Patient[]=[];
  myPatient: Patient={
    nom:'',
    prenom:'',
    dateNaissance:'',
    sexe:'',
    telephone:''
  }

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.getPatients();
  }
  getPatients(){
    this.patientService.findAll().subscribe(patients=>this.patients=patients);
  }
  deletePatient(idPatient: any){
    this.patientService.delete(idPatient).subscribe(() => {
      this.patients = this.patients.filter(consultation => consultation.idPatient != idPatient)}
    );
  }
  persistPatient(){
    this.patientService.persist(this.myPatient).subscribe((patient)=>{
      this.patients=[patient,...this.patients]
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {Consultation} from "../../models/consultation";
import {ConsultationService} from "../../services/consultation.service";

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.css']
})
export class ConsultationsComponent implements OnInit {

  myconsultation: Consultation = {
    idConsul: 0,
    nomMedecin: '',
    radiologieMedicale: '',
    specialiteMedicale: '',
    dateConsultation: '10/03/1998',
    paye: false,
    patient_id: 1
  }
  consultations: Consultation[] = [];

  constructor(private consultationServie : ConsultationService) { }

  ngOnInit(): void {
    this.getsConsultations();
  }

  getsConsultations(){
    this.consultationServie.findAll().subscribe(consultations => this.consultations = consultations);
  }

  deleteConsultation(idConsul: number){
    this.consultationServie.delete(idConsul).subscribe(() => {
      this.consultations = this.consultations.filter(consultation => consultation.idConsul != idConsul)}
    )
  }

  persistConsultation(){
    this.consultationServie.persist(this.myconsultation).subscribe((consultation) => {
      this.consultations = [consultation, ...this.consultations]
    })
  }

}

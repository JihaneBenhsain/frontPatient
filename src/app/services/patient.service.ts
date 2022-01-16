import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Patient} from "../models/patient";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  apiUrl: string;
  constructor(private  http: HttpClient) {
    this.apiUrl = 'http://localhost:5000/patients';
  }

  findAll(){
    return this.http.get<Patient[]>(this.apiUrl);
  }
  public delete(idPatient: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}delete/${idPatient}`, { responseType: 'text' });
  }
  persist(patient: Patient){
    return this.http.post<Patient>(this.apiUrl,patient);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Consultation} from "../models/consultation";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  private apiUrl = 'http://localhost:5500/consultations';

  constructor(private  http: HttpClient) {}

  public findAll(): Observable<Consultation[]>{
    return this.http.get<Consultation[]>(this.apiUrl)
  }

  public delete(idConsul: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}delete/${idConsul}`, { responseType: 'text' })
  }

  persist(consultation: Consultation){
    return this.http.post<Consultation>(this.apiUrl, consultation)
  }
  /*getConsultationList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'consultations-list');
  }

  createConsultation(consultation: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'save-consultation', consultation);
  }

  deleteConsultation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-consultation/${id}`, { responseType: 'text' });
  }

  getConsultation(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/consultation/${id}`);
  }

  updateConsultation(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/update-consultation/${id}`, value);
  }*/

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/clients/services/clientservice.service';

@Injectable({
  providedIn: 'root'
})
export class ConsultingService {

  private apiUrl = 'http://localhost:8080/api/reglements/client';  

  constructor(private http: HttpClient) { }

  
  getClients(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let apx="http://localhost:8080/api/clients"
  
    return this.http.get<Client[]>(apx, { headers });
  }

  getReglementsByClientId(clientId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${clientId}`);
  }
}

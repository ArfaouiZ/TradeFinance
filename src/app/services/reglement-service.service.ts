import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reglement } from '../../model/Reglement';  // Navigate up one directory and into model




@Injectable({
  providedIn: 'root'
})
export class ReglementserviceService {
  
  private apiUrl = 'http://localhost:8080/api/reglements';  // Your Spring Boot API endpoint

  constructor(private http: HttpClient) { }

  // Get all reglements for a specific client (READ)
  getReglementsByClientId(clientId: number): Observable<Reglement[]> {
    return this.http.get<Reglement[]>(`${this.apiUrl}/client/${clientId}`);
  }

  // Get a single reglement by ID (READ)
  getReglementById(id: number): Observable<Reglement> {
    return this.http.get<Reglement>(`${this.apiUrl}/${id}`);
  }

  // Create a new reglement for a specific client (CREATE)
  createReglement(clientId: number, reglement: Reglement): Observable<Reglement> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Reglement>(`${this.apiUrl}/client/${clientId}`, reglement, { headers });
  }

  // Update an existing reglement (UPDATE)
  updateReglement(id: number, reglement: Reglement): Observable<Reglement> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Reglement>(`${this.apiUrl}/${id}`, reglement, { headers });
  }

  // Delete a reglement by ID (DELETE)
  deleteReglement(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

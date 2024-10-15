import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Titre } from '../../model/Titre';  // Navigate up one directory and into model
@Injectable({
  providedIn: 'root'
})
export class TitreService {
  
  private apiUrl = 'http://localhost:8080/api/titres';  // Your Spring Boot API endpoint

  constructor(private http: HttpClient) { }

  // Get all titres for a specific client (READ)
  getTitresByClientId(clientId: number): Observable<Titre[]> {
    return this.http.get<Titre[]>(`${this.apiUrl}/titre/${clientId}`);
  }

  // Get a single titre by ID (READ)
  getTitreById(id: number): Observable<Titre> {
    return this.http.get<Titre>(`${this.apiUrl}/${id}`);
  }

  // Create a new titre for a specific client (CREATE)
  createTitre(clientId: number, titre: Titre): Observable<Titre> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Titre>(`${this.apiUrl}/client/${clientId}`, titre, { headers });
  }

  // Update an existing titre (UPDATE)
  updateTitre(id: number, titre: Titre): Observable<Titre> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Titre>(`${this.apiUrl}/${id}`, titre, { headers });
  }

  // Delete a titre by ID (DELETE)
  deleteTitre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

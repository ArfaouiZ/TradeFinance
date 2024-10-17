import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Client {
  id: number; // Unique identifier
  codeDouance: string; // Client code
  numeroCompte: string; // Account number
  nom: string; // Name
  adresse: string; // Address
  dateCreation: Date; // Creation date
}

@Injectable({
  providedIn: 'root'
})
export class ClientserviceService {
  private apiUrl = 'http://localhost:8080/api/clients';  

  constructor(private http: HttpClient) { }

  
  getClients(): Observable<Client[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  
    return this.http.get<Client[]>(this.apiUrl, { headers });
  }

  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.apiUrl}/${client.id}`, client);
  }
  addClient(client: Client): Observable<Client> {
    const { id, ...clientWithoutId } = client;  
    console.log(clientWithoutId);  
    return this.http.post<Client>(this.apiUrl, clientWithoutId); // Send the object without id
  }
  

  deleteClient(clientId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${clientId}`);
  }

  getTitles(clientId:number):Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/titres/${clientId}`);
  }
}

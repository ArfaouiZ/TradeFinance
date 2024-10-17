import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientDialogComponent } from './client-dialog/client-dialog.component';
import { ClientserviceService, Client } from './services/clientservice.service'; // 

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'codeDouance', 'numeroCompte', 'nom', 'adresse', 'dateCreation', 'actions'];
  dataSource: Client[] = [];
  shownTitles:any []=[];

  constructor(private dialog: MatDialog, private clientService: ClientserviceService) {}

  ngOnInit(): void {
    this.loadClients(); // Load clients when the component initializes
  }

  loadClients(): void {
    this.clientService.getClients().subscribe({
      next: (clients) => {
        this.dataSource = clients;
      },
      error: (error) => {
        console.error('Error loading clients:', error);
      }
    });
  }
  

  onAddClient(): void {
    const dialogRef = this.dialog.open(ClientDialogComponent, {
      width: '600px',
      data: { id: null, codeDouance: '', numeroCompte: '', nom: '', adresse: '', dateCreation: new Date() } // Default values for new client
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.clientService.addClient(result).subscribe(() => {
          this.loadClients(); // Refresh the client list after adding
        });
      }
    });
  }
  

  onEdit(element: Client): void {
    const dialogRef = this.dialog.open(ClientDialogComponent, {
      width: '500px',
      data: { ...element } // Pass the existing client data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.clientService.updateClient(result).subscribe(() => {
          this.loadClients();
        });
      }
    });
  }

  onDelete(element: Client): void {
    this.clientService.deleteClient(element.id).subscribe(() => {
      this.loadClients();
    });
  }

  getTitles(clientid:number){
    this.clientService.getTitles(clientid).subscribe({
      next: (titles) => {
        this.shownTitles = titles;
      },
      error: (error) => {
        console.error('Error loading titles:', error);
      }
    });

  }
}

import { Component, OnInit } from '@angular/core';
import { ConsultingService } from './service/consulting.service';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.scss']
})
export class ConsultingComponent implements OnInit {
  clients: any[] = [];
  selectedClientId!: number;
  regulations: any[] = []; // Array to store regulations for the selected client
  displayedColumns: string[] = ['id', 'montant', 'reference', 'typeReglement', 'dateReglement', 'clientId']; // Columns to display

  constructor(private consultingService: ConsultingService) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.consultingService.getClients().subscribe({
      next: (data: any[]) => {
        this.clients = data; // Handle the successful response
        console.log('Clients received: ', data);
      },
      error: (err) => {
        console.error('Error occurred while fetching clients: ', err);
      },
      complete: () => {
        console.log('Client fetching completed.');
      }
    });
  }

  onSelectClient(client: any): void {
    this.selectedClientId = client.id;
    console.log('Selected client: ', client.name);
    
    // Fetch regulations for the selected client
    this.consultingService.getReglementsByClientId(this.selectedClientId).subscribe({
      next: (data: any[]) => {
        this.regulations = data; // Store the fetched regulations
        console.log('Regulations received for client: ', this.selectedClientId, data);
      },
      error: (err) => {
        console.error('Error occurred while fetching regulations: ', err);
      },
      complete: () => {
        console.log('Regulation fetching completed for client: ', this.selectedClientId);
      }
    });
  }
}

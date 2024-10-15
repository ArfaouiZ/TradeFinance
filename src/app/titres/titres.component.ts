import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TitreService } from '../../Service/titreService/titre.service';
import { Titre } from '../../model/Titre';  // Corrected import for the Titre model
import { FormInputComponent } from './form-input/form-input.component';  // Dialog for creating/editing a titre
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-titres',
  templateUrl: './titres.component.html',
  styleUrls: ['./titres.component.scss'],
})
export class TitresComponent implements OnInit {

  displayedColumns: string[] = ['id', 'montantTitre', 'montantUtilise', 'montantDisponible', 'typeTitre', 'dateDomiciliation', 'action'];
  dataSource = new MatTableDataSource<Titre>();
  clientId: number = 1;  // Assuming a client ID for demonstration

  constructor(
    private titreService: TitreService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadTitresForClient();
  }

  // Load all titres for the given client
  loadTitresForClient(): void {
    this.titreService.getTitresByClientId(this.clientId).subscribe(
      (data: Titre[]) => {
        this.dataSource.data = data;  // Update the MatTable data source
      },
      (error) => console.error('Error loading titres:', error)
    );
  }

  // Create a new titre for the client
  createTitre(newTitre: Titre): void {
    this.titreService.createTitre(this.clientId, newTitre).subscribe(
      () => {
        this.loadTitresForClient();  // Reload titres after creating
      },
      (error) => console.error('Error creating titre:', error)
    );
  }

  // Update a titre
  updateTitre(id: number, updatedTitre: Titre): void {
    this.titreService.updateTitre(id, updatedTitre).subscribe(
      () => {
        this.loadTitresForClient();  // Reload titres after updating
      },
      (error) => console.error('Error updating titre:', error)
    );
  }

  // Delete a titre by ID
  deleteTitre(id: number): void {
    this.titreService.deleteTitre(id).subscribe(
      () => {
        this.loadTitresForClient();  // Reload titres after deletion
      },
      (error) => console.error('Error deleting titre:', error)
    );
  }

  openDialog(titre?: Titre): void {
    const dialogRef = this.dialog.open(FormInputComponent, {
      width: '400px',
      data: titre || {}  // Pass the existing Titre object if provided, otherwise pass an empty object
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (titre) {
          // If we passed a titre, update it
          this.updateTitre(titre.id, result);
        } else {
          // Otherwise, create a new titre
          this.createTitre(result);
        }
      }
    });
  }
}

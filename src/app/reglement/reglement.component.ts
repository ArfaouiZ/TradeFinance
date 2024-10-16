import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { MatDialog } from '@angular/material/dialog';
import {Reglement} from '../../model/Reglement'
import { ReglementserviceService } from '../services/reglement-service.service';  // Adjust path as needed
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormInputReglementComponent } from './form-input-reglement/form-input-reglement.component';  // Dialog for creating/editing a reglement

@Component({
  selector: 'app-reglements',
  templateUrl: './reglement.component.html',
  styleUrls: ['./reglement.component.scss'],
})
export class ReglementsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'montant', 'reference', 'typeReglement', 'dateReglement', 'clientId', 'action'];
  dataSource = new MatTableDataSource<Reglement>();
  clientId: number = 1;  // Assuming a client ID for demonstration

  constructor(
    private reglementService: ReglementserviceService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadReglementsForClient();
  }

  // Load all reglements for the given client
  loadReglementsForClient(): void {
    this.reglementService.getReglementsByClientId(this.clientId).subscribe(
      (data: Reglement[]) => {
        this.dataSource.data = data;  // Update the MatTable data source
      },
      (error) => console.error('Error loading reglements:', error)
    );
  }

  // Open the dialog for creating/editing a reglement
  openDialog(reglement?: Reglement): void {
    const dialogRef = this.dialog.open(FormInputReglementComponent, {
      width: '400px',
      data: reglement || {}  // Pass the existing reglement data if editing, otherwise pass an empty object for creation
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (reglement) {
          this.updateReglement(reglement.id, result);  // Update the existing reglement
        } else {
          this.createReglement(result);  // Create a new reglement
        }
      }
    });
  }

  // Create a new reglement for the client
  createReglement(newReglement: Reglement): void {
    this.reglementService.createReglement(this.clientId, newReglement).subscribe(
      () => {
        this.loadReglementsForClient();  // Reload reglements after creating
      },
      (error) => console.error('Error creating reglement:', error)
    );
  }

  // Update an existing reglement
  updateReglement(id: number, updatedReglement: Reglement): void {
    this.reglementService.updateReglement(id, updatedReglement).subscribe(
      () => {
        this.loadReglementsForClient();  // Reload reglements after updating
      },
      (error) => console.error('Error updating reglement:', error)
    );
  }

  // Delete a reglement by ID
  deleteReglement(id: number): void {
    this.reglementService.deleteReglement(id).subscribe(
      () => {
        this.loadReglementsForClient();  // Reload reglements after deletion
      },
      (error) => console.error('Error deleting reglement:', error)
    );
  }
}

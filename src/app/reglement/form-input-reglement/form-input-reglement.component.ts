import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClientserviceService, Client } from '../../clients/services/clientservice.service';  // Client Service
import { ReglementserviceService } from '../../services/reglement-service.service';  // Reglement Service
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-form-input',
  templateUrl: './form-input-reglement.component.html',
  styleUrls: ['./form-input-reglement.component.scss']
})
export class FormInputReglementComponent implements OnInit {
  form!: FormGroup;
  clients: Client[] = [];

  constructor(
    private fb: FormBuilder,
    private clientService: ClientserviceService,  // Inject the Client service
    private reglementService: ReglementserviceService,  // Inject the Reglement service
    public dialogRef: MatDialogRef<FormInputReglementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any  // Inject the data passed to the dialog
  ) {}

  ngOnInit(): void {
    // Create the form to match the Reglement model
    this.form = this.fb.group({
      montant: [this.data.montant || '', Validators.required],
      reference: [this.data.reference || '', Validators.required],
      typeReglement: [this.data.typeReglement || '', Validators.required],
      dateReglement: [this.data.dateReglement || '', Validators.required],
      clientId: [this.data.clientId || '', Validators.required]  // Add client ID field
    });

    // Load the list of clients when the component is initialized
    this.loadClients();
  }

  // Function to load clients from the backend
  loadClients(): void {
    this.clientService.getClients().subscribe(
      (clients: Client[]) => {
        this.clients = clients;  // Assign the list of clients
      },
      (error) => console.error('Error loading clients:', error)
    );
  }

  // Submit the form
  onSubmit(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);  // Pass the form data back to the parent component
    }
  }

  // Cancel the form
  onCancel(): void {
    this.dialogRef.close();  // Close the dialog without saving
  }
}

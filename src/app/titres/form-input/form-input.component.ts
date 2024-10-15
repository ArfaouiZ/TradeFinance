import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit{
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<FormInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any  // Inject the data passed to the dialog
  ) {}

  ngOnInit(): void {
    // Create the form with default values or the passed-in data
    this.form = this.fb.group({
      montantTitre: [this.data.montantTitre || '', Validators.required],
      montantUtilise: [this.data.montantUtilise || '', Validators.required],
      montantDisponible: [this.data.montantDisponible || '', Validators.required],
      typeTitre: [this.data.typeTitre || '', Validators.required],
      dateDomiciliation: [this.data.dateDomiciliation || '', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);  // Pass the form data back to the parent component
    }
  }

  onCancel(): void {
    this.dialogRef.close();  // Close the dialog without saving
  }
}

export interface Reglement {
    id: number;                  // ID of the reglement
    montant: number;             // Montant of the reglement
    reference: string;           // Reference of the reglement
    typeReglement: string;       // Type of the reglement (can be ENUM)
    dateReglement: string;       // Date of the reglement (use ISO string or Date object)
    clientId: number;            // ID of the associated client
    reglementTitres?: ReglementTitre[];  // List of associated ReglementTitre objects (optional)
  }
  
  // Interface for ReglementTitre (if applicable)
  export interface ReglementTitre {
    id: number;                  // ID of the ReglementTitre
    montantReparti: number;             // Montant of the ReglementTitre
    titreId: number;             // ID of the associated Titre
  }
  
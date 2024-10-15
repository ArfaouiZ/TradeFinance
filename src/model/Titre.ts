export interface Titre {
    id: number;
    montantTitre: number;
    montantUtilise: number;
    montantDisponible: number;
    typeTitre: string;  // IMPORT, EXPORT, etc.
    dateDomiciliation: string;  // or Date
    clientId: number;  // Optional if required
  }
  
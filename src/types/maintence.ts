export type Maintence = {
  id: number;
  typeVehicle: string;
  actualKm: number;
  maintanceRequest: string;
  date: string; //data e hora
  maintanceDone: string;
  nextKmNeed: number;
  spent: number;
  responsable: string;
  location: string;
  numberLocation: string;
  note: string;
};

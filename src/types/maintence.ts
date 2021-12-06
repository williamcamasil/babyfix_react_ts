// import { Type } from './typeVehicle';

export type Maintence = {
  id: number;
  //type: Type[];
  type: string;
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

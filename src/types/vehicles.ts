import { Type } from './type';
import { Brand } from './brand';
import { Model } from './model';

export type Vehicles = {
  id: number;
  type: Type[];
  name: string;
  brand: Brand[];
  model: Model[];
  year: number;
  km: number;
  // km: Category[];
};

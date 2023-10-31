import { Phone } from './Phone';

export interface DataFromServer {
  count: number,
  rows: Phone[],
}

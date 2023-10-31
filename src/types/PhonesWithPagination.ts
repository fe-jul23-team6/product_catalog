import { Phone } from './Phone';

export interface PhonesWithPagination {
  count: number,
  rows: Phone[],
}

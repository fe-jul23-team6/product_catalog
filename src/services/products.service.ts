import { client } from '../utils/fetchProducts';
import { Phone } from '../types/Phone';

export function getPhones() {
  return client.getAll<Phone[]>('/products');
}

import { client } from '../utils/fetchProducts';
import { Phone } from '../types/Phone';

export function getPhones() {
  return client.getAll<Phone[]>('/products');
}

export function getPhoneById(phoneId: string) {
  return client.getAll<Phone>(`/products/${phoneId}`);
}

export function getPhonesByIds(ids: number[]) {
  return client.getAll<Phone[]>(`/products?ids=${ids.join(',')}`);
}

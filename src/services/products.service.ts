import { client } from '../utils/fetchProducts';
import { Phone } from '../types/Phone';

export function getPhones() {
  return client.getAll<Phone[]>('/products');
}

export function getPhoneById(id: string) {
  return client.getAll<Phone>(`/products/${id}`);
}

export function getPhonesByIds(ids: number[]) {
  return client.getAll<Phone[]>(`/products?ids=${ids.join(',')}`);
}

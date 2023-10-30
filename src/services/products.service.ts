import { PhonesWithPagination } from 'types';
import { client } from '../utils/fetchProducts';
import { Phone } from '../types/Phone';

export function getPhones() {
  return client.getAll<Phone[]>('/products/?category=phones');
}

export function getTablets() {
  return client.getAll<Phone[]>('/products/?category=tablets');
}

export function getAccessories() {
  return client.getAll<Phone[]>('/products/?category=accessories');
}

export function getProductsPagination(limit: string, page: string) {
  return client.getPhonesWithPagination<PhonesWithPagination>(`/products?limit=${limit}&page=${page}`);
}

export function getPhoneById(phoneId: string) {
  return client.getAll<Phone>(`/products/${phoneId}`);
}

export function getPhonesByIds(ids: number[]) {
  return client.getAll<Phone[]>(`/products?ids=${ids.join(',')}`);
}

// const getProducts = (category: string) => {
//   return client.getAll<Phone[]>(`/products/?category=${category}`);
// };

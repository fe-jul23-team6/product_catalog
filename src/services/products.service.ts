import { PhonesWithPagination } from 'types';
import { FullPhone } from 'types/FullPhone';
import { client } from '../utils/fetchProducts';
import { Phone } from '../types/Phone';

export function getPhones() {
  return client.getAll<PhonesWithPagination>('/products/?category=phones');
}

export function getTablets() {
  return client.getAll<PhonesWithPagination>('/products/?category=tablets');
}

export function getAccessories() {
  return client.getAll<PhonesWithPagination>('/products/?category=accessories');
}

export function getProductsPagination(limit: string, page: string) {
  return client.getPhonesWithPagination<PhonesWithPagination>(`/products?limit=${limit}&page=${page}`);
}

export function getPhoneById(phoneId: string) {
  return client.getAll<FullPhone>(`/products/${phoneId}`);
}

export function getPhonesByIds(ids: number[]) {
  return client.getAll<Phone[]>(`/products?ids=${ids.join(',')}`);
}

// export const getProducts = (category: string) => {
//   return client.getAll<PhonesWithPagination>(`/products/?category=${category}`);
// };

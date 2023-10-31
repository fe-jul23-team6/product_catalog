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

interface PhonesWithPagination {
  count: number,
  rows: Phone[],
}

export function getPhonesPagination(limit: string, page: string) {
  return client.getPhonesWithPagination<PhonesWithPagination>(`/products?limit=${limit}&page=${page}`);
}

export function getPhoneById(phoneId: string) {
  return client.getAll<Phone>(`/products/${phoneId}`);
}

export function getPhonesByIds(ids: number[]) {
  return client.getAll<Phone[]>(`/products?ids=${ids.join(',')}`);
}

export function getNewestPhones() {
  return client.getAll<Phone[]>('/products/new');
}

export function getDiscountedPhones() {
  return client.getAll<Phone[]>('/products/discount');
}

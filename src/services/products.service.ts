import {
  Phone,
  SortOption,
  DataFromServer,
  FullPhoneWithId,
} from 'types';

import { client } from '../utils';

export function getPhones(
  sort: keyof typeof SortOption = 'Alphabetically',
  page: string | null = null,
  perPage: string | null = null,
) {
  let path = '/products/?category=phones';

  if (sort === 'Newest') {
    path += `&sortBy=${SortOption[sort]}&orderDir=DESC`;
  } else {
    path += `&sortBy=${SortOption[sort]}`;
  }

  if (page) {
    path += `&page=${page}`;
  }

  if (perPage) {
    path += `&limit=${perPage}`;
  }

  return client.getAll<DataFromServer>(path);
}

export function getTablets(
  sort: keyof typeof SortOption = 'Newest',
  page: string | null = null,
  perPage: string | null = null,
) {
  let path = '/products/?category=tablets';

  if (sort === 'Newest') {
    path += `&sortBy=${SortOption[sort]}&orderDir=DESC`;
  } else {
    path += `&sortBy=${SortOption[sort]}`;
  }

  if (page) {
    path += `&page=${page}`;
  }

  if (perPage) {
    path += `&limit=${perPage}`;
  }

  return client.getAll<DataFromServer>(path);
}

export function getAccessories(
  sort: keyof typeof SortOption = 'Alphabetically',
  page: string | null = null,
  perPage: string | null = null,
) {
  let path = '/products/?category=accessories';

  if (sort === 'Newest') {
    path += `&sortBy=${SortOption[sort]}&orderDir=DESC`;
  } else {
    path += `&sortBy=${SortOption[sort]}`;
  }

  if (page) {
    path += `&page=${page}`;
  }

  if (perPage) {
    path += `&limit=${perPage}`;
  }

  return client.getAll<DataFromServer>(path);
}

export function getPhoneById(itemId: string) {
  return client.getAll<FullPhoneWithId>(`/products/${itemId}`);
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

export function getRecommendedProducts(itemId: string) {
  return client.getAll<Phone[]>(`/products/${itemId}/recommended`);
}

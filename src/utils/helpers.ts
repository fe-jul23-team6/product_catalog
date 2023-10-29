import { Phone, SearchParams } from 'types';

export function getPages(from: number, to: number): number[] {
  const pages = [];

  for (let n = from; n <= to; n += 1) {
    pages.push(n);
  }

  return pages;
}

export function getItems(from: number, to: number, items: Phone[]) {
  return items.slice(from, (to - from + 2));
}

export function getSearchWith(
  currentParams: URLSearchParams,
  paramsToUpdate: SearchParams,
): string {
  const newParams = new URLSearchParams(
    currentParams.toString(),
  );

  Object.entries(paramsToUpdate)
    .forEach(([key, value]) => {
      if (value === null) {
        newParams.delete(key);
        // } else if (Array.isArray(value)) {
        //   newParams.delete(key);

        //   value.forEach(part => {
        //     newParams.append(key, part);
        //   });
      } else {
        newParams.set(key, value);
      }
    });

  return newParams.toString();
}

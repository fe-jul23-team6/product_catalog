import { Colors, SortOption } from 'types';
import { BASE_URL } from './fetchProducts';

export const MESSAGES = {
  NO_PHONES: 'There are no phones yet',
  NO_TABLETS: 'There are no tablets yet',
  NO_ACCESSORIES: 'There are no accessories yet',
  NO_ITEMS: 'There are no items yet',
  NO_SERVER_RESPONSE: 'Something went wrong',
};

export const PAGE_SIZE_OPTIONS = ['All', '4', '8', '16'];
export const VISIBLE_PAGES_COUNT = 4;
export const SORT_OPTION = ['Newest', 'Alphabetically', 'Cheapest'];

export const DEFAULT_PAGE = 1;
export const DEFAULT_SORT_BY = 'Newest' as keyof typeof SortOption;

export const PHONE_COLORS: Colors = {
  black: '#221f27',
  blacktitanium: '#525252',
  blue: '#2a7ba7',
  bluetitanium: '#2f3c4d',
  coral: '#e76752',
  gold: '#eacfB8',
  graphite: '#251607',
  green: '#bde7b7',
  midnight: '#191f28',
  midnightgreen: '#676e66',
  naturaltitanium: '#e8e3d5',
  red: '#ca243c',
  pink: '#fec2df',
  purple: '#b49cd9',
  rosegold: '#eecfc8',
  sierrablue: '#69abce',
  silver: '#deded7',
  skyblue: '#bffcfe',
  spaceblack: '#505150',
  spacegray: '#62605f',
  starlight: '#f0eae5',
  white: '#fbf7f2',
  whitetitanium: '#f2f1eb',
  yellow: '#f2d365',
};

export const LONG_BANNERS = {
  slide1: `${BASE_URL}/img/rectangle/banner-main.png`,
  slide2: `${BASE_URL}/img/rectangle/banner-phones.png`,
  slide3: `${BASE_URL}/img/rectangle/banner-tablets.png`,
  slide4: `${BASE_URL}/img/rectangle/banner-watches.png`,
};

export const SQUARE_BANNERS = {
  slide1: `${BASE_URL}/img/square/square-banner-main.png`,
  slide2: `${BASE_URL}/img/square/square-banner-phones.png`,
  slide3: `${BASE_URL}/img/square/square-banner-tablets.png`,
  slide4: `${BASE_URL}/img/square/square-banner-watches.png`,
};

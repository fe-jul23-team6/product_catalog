import { Colors } from 'types/Color';
import { SortOption } from 'types/SortOption';

export const MESSAGES = {
  NO_PHONES: 'There are no phones yet',
  NO_TABLETS: 'There are no tablets yet',
  NO_ACCESSORIES: 'There are no accessories yet',
  NO_SERVER_RESPONSE: 'Something went wrong',
};

export const PAGE_SIZE_OPTIONS = ['All', '4', '8', '16'];
export const VISIBLE_PAGES_COUNT = 4;
export const SORT_OPTION = ['Newest', 'Alphabetically', 'Cheapest'];

export const DEFAULT_PAGE = 1;
export const DEFAULT_SORT_BY = 'Newest' as keyof typeof SortOption;

export const PHONE_COLORS: Colors = {
  black: '#221F27',
  gold: '#EACFB8',
  silver: '#DEDED7',
  red: '#AE2A36',
  coral: '#E76752',
  yellow: '#F2D365',
  green: '#C8E7D8',
  midnightgreen: '#676E66',
  spacegray: '#62605F',
  white: '#FBF7F2',
  purple: '#B49CD9',
  rosegold: '#EECFC8',
  sierrablue: '#69abce',
  graphite: '#251607',
  spaceblack: '#505150',
  midnight: '#191F28',
  blue: '#2A7BA7',
  pink: '#FEC2DF',
};

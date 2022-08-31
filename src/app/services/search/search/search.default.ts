import {
  ILiveSearchPassenger,
  ILiveSearchWay,
  TLiveSearchType,
} from './search.interface';

export const SearchDefaultTypes: TLiveSearchType[] = [
  'flight-iran',
  'flight-world',
  'bus',
  'train',
  'hotel',
  'insurance',
];

export const SearchDefaultPassenger: ILiveSearchPassenger = {
  adult: 1,
  child: 0,
  infant: 0,
};

export const SearchDefaultWay: ILiveSearchWay = {};

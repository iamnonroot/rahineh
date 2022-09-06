import {
  ILiveSearchPassenger,
  ILiveSearchRoom,
  ILiveSearchWay,
  TLiveSearchType,
} from './search.interface';

import {
  DcFilterRadioInjected,
  Option,
} from 'src/app/components/result/dc-filter-radio/dc-filter-radio.component';

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

export const SearchDeafultRoom: ILiveSearchRoom = {
  adult: 1,
  child: [],
};

export const SearchDefaultWay: ILiveSearchWay = {};

export const SearchDeafultFilterSortVehacel: DcFilterRadioInjected = {
  title: 'نمایش و مرتب سازی',
  opened: false,
  key: 'sort',
  options: [
    {
      value: 'default',
      text: 'پیشفرض راهینه',
    },
    {
      value: 'sooner',
      text: 'نمایش زودترین ها',
    },
    {
      value: 'later',
      text: 'نمایش دیرترین ها',
    },
    {
      value: 'cheaper',
      text: 'نمایش ارزانترین',
    },
    {
      value: 'most-expensive',
      text: 'نمایش گرانترین ها',
    },
  ],
};

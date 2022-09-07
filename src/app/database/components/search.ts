export interface ISearchTab {
  icon: string;
  text: string;
  link: string;
  type: string;
  disable?: boolean;
}

export const SearchTabs: ISearchTab[] = [
  {
    icon: 'flight_takeoff',
    text: 'پرواز داخلی',
    link: '/',
    type: 'flight-iran',
  },
  {
    icon: 'flight',
    text: 'پرواز خارجی',
    link: '/flight-world',
    type: 'flight-world',
    disable: true,
  },
  {
    icon: 'directions_transit_filled',
    text: 'قطار',
    link: '/train',
    type: 'train',
    disable: true,
  },
  {
    icon: 'directions_bus_filled',
    text: 'اتوبوس',
    link: '/bus',
    type: 'bus',
    disable: true,
  },
  {
    icon: 'hotel',
    text: 'هتل',
    link: '/hotel',
    type: 'hotel',
    disable: true,
  },
  // {
  //   icon: 'local_hospital',
  //   text: 'بیمه مسافرتی',
  //   link: '/insurance',
  //   type: 'insurance',
  //   disable: true,
  // },
];

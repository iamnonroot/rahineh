export interface IHeaderLink {
  text: string;
  href: string;
}

export const HeaderLinks: IHeaderLink[] = [
  {
    text: 'پرواز داخلی',
    href: '/',
  },
  {
    text: 'پرواز خارجی',
    href: '/flight-world',
  },
  {
    text: 'قطار',
    href: '/train',
  },
  {
    text: 'اتوبوس',
    href: '/bus',
  },
  {
    text: 'هتل',
    href: '/hotel',
  },
  // {
  //   text: 'بیمه مسافرتی',
  //   href: '/insurance',
  // },
];

export interface IHeaderLink {
  text: string;
  href: string;
}

export interface IHeaderSidenavItem {
  icon: string;
  text: string;
  link: string;
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

export const HeaderSidenavItems: IHeaderSidenavItem[] = [
  {
    icon: 'phone',
    text: 'تماس با ما',
    link: '/page/contact',
  },{
    icon: 'help',
    text: 'راهنمایی',
    link: '/help-center'
  }
];

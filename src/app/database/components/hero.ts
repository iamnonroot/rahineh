export interface IHeroContent {
  title: string;
  subtitle: string;
  image: string;
  color: string;
}

export const HerosByType: { [key: string]: IHeroContent } = {
  'flight-iran': {
    title: 'پرواز داخلی',
    subtitle: 'پرواز بر آسمان های شهر های ایران',
    image: '/assets/images/hero/flight-iran.jpg',
    color: '#000',
  },
  'flight-world': {
    title: 'پرواز خارجی',
    subtitle: 'پرواز بر آسمان های شهر های ایران',
    image: '/assets/images/hero/flight-iran.jpg',
    color: '#000',
  },
  hotel: {
    title: 'هتل',
    subtitle: 'خطوط راه آهن شهری و بیرون کشوری',
    image: '/assets/images/hero/flight-iran.jpg',
    color: '#000',
  },
  bus: {
    title: 'اتوبوس',
    subtitle: 'از پایانه اتوبوس شهری به پایانه اتوبوس شهری دیگر',
    image: '/assets/images/hero/flight-iran.jpg',
    color: '#000',
  },
  train: {
    title: 'قطار',
    subtitle: 'رزرو اتاق های هتل ها در تمام نقاط کشور و جهان',
    image: '/assets/images/hero/flight-iran.jpg',
    color: '#000',
  },
  insurance: {
    title: 'بیمه مسافرتی',
    subtitle: 'بیمه شوید تا از ما پولش رو بهتون بدیم',
    image: '/assets/images/hero/flight-iran.jpg',
    color: '#000',
  },
};

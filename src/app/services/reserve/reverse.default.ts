import moment from 'jalali-moment';
import { TReservePassengerType, IReservePassenger } from './reverse.interface';

export const ReverseDefaultPassenger = (
  type: TReservePassengerType
): IReservePassenger => {
  const today = moment();

  return {
    type: type,
    firstname_en: '',
    lastname_en: '',
    nationality: 'IR',
    birth_date: {
      format: 'jalali',
      year: today.jYear(),
      month: today.jMonth() + 1,
      day: today.jDate(),
    },
  };
};

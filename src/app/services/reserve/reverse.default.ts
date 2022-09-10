import { FormGroup, FormControl, Validators } from '@angular/forms';
import moment, { from } from 'jalali-moment';
import { IReservePassenger, TReservePassengerType } from './reverse.interface';

export const ReverseDefaultPassenger = (
  type: TReservePassengerType
): FormGroup => {
  const today = moment();

  return new FormGroup({
    type: new FormControl(type),
    firstname_en: new FormControl('', [Validators.required]),
    lastname_en: new FormControl('', [Validators.required]),
    firstname_fa: new FormControl('', []),
    lastname_fa: new FormControl('', []),
    gender: new FormControl('', [Validators.required]),
    national_code: new FormControl('', [Validators.required]),
    passport_id: new FormControl('', []), // must push required
    nationality: new FormControl('IR'),
    birth_date_year: new FormControl(today.jYear()),
    birth_date_month: new FormControl(today.jMonth()),
    birth_date_day: new FormControl(today.jDate()),
  });

  // return {
  //   type: type,
  //   nationality: 'IR',
  //   birth_date: {
  //     format: 'jalali',
  //     year: today.jYear(),
  //     month: today.jMonth() + 1,
  //     day: today.jDate(),
  //   },
  // };
};

export const ConvertFormGroupToJSON = (form: FormGroup): any => {
  const get = (name: string, defaultValue: any = null) =>
    form.get(name) && form.get(name)!.value
      ? form.get(name)!.value
      : defaultValue;
  const birth_date_year = get('birth_date_year'),
    birth_date_month = get('birth_date_month') + 1,
    birth_date_day = get('birth_date_day');

  return {
    firstname_en: get('firstname_en'),
    lastname_en: get('lastname_en'),
    firstname_fa: get('firstname_fa'),
    lastname_fa: get('lastname_fa'),
    gender: get('gender'),
    birth_country: get('birth_country'),
    nationality: get('nationality'),
    national_code: get('national_code'),
    passport_id: get('passport_id'),
    passport_country: get('passport_country'),
    passport_expire: get('passport_expire'),
    birth_date: moment(
      `${birth_date_year}-${birth_date_month}-${birth_date_day}`,
      'jYYYY-jMM-jDD'
    ).format('yyyy-MM-DD'),
  };
};

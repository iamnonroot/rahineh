import { FormGroup, FormControl, Validators } from '@angular/forms';
import moment from 'jalali-moment';
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
  const birth_date_year = form.get('birth_date_year')!.value,
    birth_date_month = form.get('birth_date_month')!.value,
    birth_date_day = form.get('birth_date_day')!.value;

  return {
    firstname_en: form.get('firstname_en')!.value,
    lastname_en: form.get('lastname_en')!.value,
    firstname_fa: form.get('firstname_fa')!.value,
    lastname_fa: form.get('lastname_fa')!.value,
    gender: form.get('gender')!.value,
    birth_country: form.get('birth_country')!.value ?? null,
    nationality: form.get('nationality')!.value,
    national_code: form.get('national_code')!.value ?? null,
    passport_id: form.get('passport_id')!.value ?? null,
    passport_country: form.get('passport_country')!.value ?? null,
    passport_expire: form.get('passport_expire')!.value ?? null,
    birth_date: moment(
      `${birth_date_year}-${birth_date_month}-${birth_date_day}`
    ).format('yyyy-MM-DD'),
  };
};

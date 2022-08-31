import { ILiveSearchWayDate } from '../search/search/search.interface';

export type TReservePassengerType = 'adult' | 'child' | 'infant';

export type TReservePassengerGender = 'male' | 'female';

export type TReservePassengerNationality = 'iranian' | 'non-iranian';

export interface IReservePassenger {
  id?: string;
  type: TReservePassengerType;
  firstname_fa?: string;
  firstname_en: string;
  lastname_fa?: string;
  lastname_en: string;
  gender?: TReservePassengerGender;
  birth_date?: ILiveSearchWayDate;
  birth_country?: string; // undefined == nationality be iraninan
  nationality: TReservePassengerNationality;
  national_code?: string; // undefined == nationality be non-iraninan
  passport_id?: string; // undefined == nationality be iraninan
  passport_country?: string; // undefined == nationality be iraninan
  passport_expire?: ILiveSearchWayDate; // undefined == nationality be iraninan
}

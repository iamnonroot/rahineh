import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ILiveSearchPassenger } from '../search/search/search.interface';
import { ReverseDefaultPassenger } from './reverse.default';
import {
  IReserveInformation,
  IReservePassenger,
  IReservePassengerCount,
  TReservePassengerType,
} from './reverse.interface';

@Injectable({
  providedIn: 'root',
})
export class ReserveService {
  public Passengers: FormGroup[] = [];
  public PassengersCount: IReservePassengerCount = {
    adult: 0,
    child: 0,
    infant: 0,
  };
  public Description: string = '';
  public Information: IReserveInformation = {
    fullname: '',
    phone: '',
    email: '',
  };

  constructor() {}

  public Clear() {
    this.Passengers = [];
    this.PassengersCount = {
      adult: 0,
      child: 0,
      infant: 0,
    };
    this.Description = '';
    this.Information = {
      fullname: '',
      phone: '',
      email: '',
    };
  }

  public SetPassengersByCount(count: ILiveSearchPassenger) {
    this.PassengersCount = count;
    this.Passengers = [];
    const types = [].concat(
      ...Array.from({ length: count.adult }, () => 'adult' as any),
      ...Array.from({ length: count.child }, () => 'child' as any),
      ...Array.from({ length: count.infant }, () => 'infant' as any)
    );
    for (let type of types) {
      this.AddPassengerByType(type);
    }
  }

  public AddPassengerByType(type: TReservePassengerType) {
    this.Passengers.push(ReverseDefaultPassenger(type));
  }

  public RemovePassengerByIndex(index: number) {
    this.Passengers.splice(index, 1);
  }

  public CountPassengerByType(type: TReservePassengerType) {
    return this.CountPassengers()[type];
  }

  public CountPassengers(): ILiveSearchPassenger {
    return {
      adult: this.Passengers.filter(
        (item) => item.get('type')!.value == 'adult'
      ).length,
      child: this.Passengers.filter(
        (item) => item.get('type')!.value == 'child'
      ).length,
      infant: this.Passengers.filter(
        (item) => item.get('type')!.value == 'infant'
      ).length,
    };
  }

  public ValidatePassengers(): boolean {
    for (let item of this.Passengers) {
      // if (item.firstname_en.length == 0) return false;
      // if (item.lastname_en.length == 0) return false;
      // if (!item.gender || item.gender.length == 0) return false;
      // if (
      //   item.nationality == 'IR' &&
      //   (!item.national_code || item.national_code.length != 10)
      // )
      //   return false;
      // if (
      //   item.nationality == 'non-IR' &&
      //   (!item.passport_country || item.passport_country.length == 0)
      // )
      //   return false;
      // if (
      //   item.nationality == 'non-IR' &&
      //   (!item.passport_id || item.passport_id.length == 0)
      // )
      //   return false;

      if (item.invalid) {
        return false;
      }
    }

    return true;
  }

  public ValidateInformation(): boolean {
    const validateEmail = (email: string) => {
      return /\S+@\S+\.\S+/.test(email);
    };

    if (this.Information.fullname.length == 0) return false;
    if (this.Information.phone.length != 11) return false;
    if (this.Information.email.length == 0) return false;
    if (validateEmail(this.Information.email) != true) return false;
    return true;
  }
}

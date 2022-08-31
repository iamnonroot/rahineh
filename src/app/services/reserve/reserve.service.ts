import { Injectable } from '@angular/core';
import { ILiveSearchPassenger } from '../search/search/search.interface';
import { ReverseDefaultPassenger } from './reverse.default';
import { IReservePassenger, TReservePassengerType } from './reverse.interface';

@Injectable({
  providedIn: 'root',
})
export class ReserveService {
  public Passengers: IReservePassenger[] = [];
  constructor() {}

  public SetPassengersByCount(count: ILiveSearchPassenger) {
    const types = [].concat(
      ...Array.from({ length: count.adult }, () => 'adult' as any),
      ...Array.from({ length: count.child }, () => 'child' as any),
      ...Array.from({ length: count.infant }, () => 'infant' as any)
    );
    this.Passengers = [];
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

  public CountPassengers(): ILiveSearchPassenger {
    return {
      adult: this.Passengers.filter((item) => item.type == 'adult').length,
      child: this.Passengers.filter((item) => item.type == 'child').length,
      infant: this.Passengers.filter((item) => item.type == 'infant').length,
    };
  }
}

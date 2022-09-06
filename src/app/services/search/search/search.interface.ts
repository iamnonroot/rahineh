import { TCalendaringFormatter } from 'calendaring/dist/interface';
import { ILiveSearchFlightIran } from '../flight-iran/flight-iran.interface';

export type TLiveSearchType =
  | 'flight-iran'
  | 'flight-world'
  | 'bus'
  | 'train'
  | 'hotel'
  | 'insurance';

export type TLiveSearchPasenger = 'adult' | 'child' | 'infant';

export interface ILiveSearchPassenger {
  adult: number;
  child: number;
  infant: number;
}

export interface ILiveSearchRoom {
  adult: number;
  child: number[]; // age array
}

export interface ILiveSearchWayLocation {
  value: string;
  text: string;
}

export interface ILiveSearchWayDate {
  year: number;
  month: number;
  day: number;
  format: TCalendaringFormatter;
}

export type TLiveSearchWayType = 'go' | 'go-back' | 'multi';

export interface ILiveSearchWay {
  origin?: ILiveSearchWayLocation;
  destination?: ILiveSearchWayLocation;
  date?: ILiveSearchWayDate;
}

export interface ILiveSearch {
  type: TLiveSearchType;
  filter: any; // search result filter
  flightIran: ILiveSearchFlightIran;
}

export interface ISearchPrice {
  airlineCode: string | null;
  date: string;
  specialDiscountAllowed: string | null;
  totalFare: string | null;
  fareCurrencySymbol: string;
  fareCurrencyName: string;
  fareCurrencyCode: string;
}

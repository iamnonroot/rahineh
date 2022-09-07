import {
  IReserveInformation,
  IReservePassenger,
} from '../../reserve/reverse.interface';
import {
  ILiveSearchPassenger,
  ILiveSearchWay,
  TLiveSearchWayType,
} from '../search/search.interface';

export interface ILiveSearchFlightIran {
  passengers: ILiveSearchPassenger;
  ways: ILiveSearchWay[];
  wayType: TLiveSearchWayType;
}

export interface ISearchFlightIranParam {
  flightSteps: ISearchFlightIranParamStep[];
  flightPreferences: {
    cabinClass: number;
    tripType: number;
  };
  searchedPassenger: {
    infant: number;
    adult: number;
    child: number;
  };
}

export interface ISearchFlightIranParamStep {
  departureDate: string;
  originCode: string;
  destinationCode: string;
}

export interface ISearchFlightIranFilterParam {
  airlines: any[];
  flights: any[];
}

export interface IReserveFlightIranParam {
  passengers: IReservePassenger[];
  information: IReserveInformation;
  description: string;
  refrenceId: string;
}

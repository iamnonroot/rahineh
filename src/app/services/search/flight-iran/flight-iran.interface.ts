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

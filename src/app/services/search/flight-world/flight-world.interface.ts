import {
  ILiveSearchPassenger,
  ILiveSearchWay,
  TLiveSearchWayType,
} from '../search/search.interface';

export interface ILiveSearchFlightWorld {
  passengers: ILiveSearchPassenger;
  ways: ILiveSearchWay[];
  wayType: TLiveSearchWayType;
}

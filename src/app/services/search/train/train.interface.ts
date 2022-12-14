import {
  ILiveSearchPassenger,
  ILiveSearchWay,
  TLiveSearchWayType,
} from '../search/search.interface';

export interface ILiveSearchTrain {
  passengers: ILiveSearchPassenger;
  ways: ILiveSearchWay[];
  wayType: TLiveSearchWayType;
}

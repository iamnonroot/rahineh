import {
  ILiveSearchPassenger,
  ILiveSearchWay,
} from '../search/search.interface';

export interface ILiveSearchBus {
  passengers: ILiveSearchPassenger;
  ways: ILiveSearchWay[];
}

import {
  ILiveSearchRoom,
  ILiveSearchWayDate,
  ILiveSearchWayLocation,
} from '../search/search.interface';

export interface ILiveSearchHotel {
  rooms: ILiveSearchRoom;
  location: ILiveSearchWayLocation;
  departure: ILiveSearchWayDate;
  return: ILiveSearchWayDate;
}

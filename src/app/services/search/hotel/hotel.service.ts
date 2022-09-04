import { Injectable } from '@angular/core';
import { SearchHotel } from '../search/search.abstract';
import { SearchDeafultRoom } from '../search/search.default';
import { SearchService } from '../search/search.service';
import { ILiveSearchHotel } from './hotel.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchHotelService extends SearchHotel<ILiveSearchHotel> {
  constructor(search: SearchService) {
    super(search);
    this.Clear();
  }

  public Clear() {
    this.search.Set('hotel', {
      room: [SearchDeafultRoom],
    });
  }
}

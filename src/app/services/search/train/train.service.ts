import { Injectable } from '@angular/core';
import { SearchVehacel } from '../search/search.abstract';
import {
  SearchDefaultPassenger,
  SearchDefaultWay,
} from '../search/search.default';
import {
  SEARCH_PASSENGERS,
  SEARCH_WAYS,
  SEARCH_WAY_TYPE,
} from '../search/search.enum';
import { SearchService } from '../search/search.service';
import { ILiveSearchTrain } from './train.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchTrainService extends SearchVehacel<ILiveSearchTrain> {
  constructor(search: SearchService) {
    super(search, 'train');
    this.Clear();
  }

  public Clear() {
    this.search.Set('train', {
      [SEARCH_PASSENGERS]: SearchDefaultPassenger,
      [SEARCH_WAYS]: [SearchDefaultWay],
      [SEARCH_WAY_TYPE]: 'go',
    });
  }
}

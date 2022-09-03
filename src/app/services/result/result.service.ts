import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  TLiveSearchType,
  TLiveSearchWayType,
} from '../search/search/search.interface';
import { IResultItineraryItem } from './result.interface';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  public Type!: TLiveSearchType; // Search type
  public Selected: IResultItineraryItem | undefined = undefined; // Selected Itinerary
  public WayType!: TLiveSearchWayType; // way type 'go' | 'go-back' | 'multi'
  public Loading: boolean = false;

  constructor(private router: Router) {}

  public Select(item: IResultItineraryItem) {
    this.Selected = item;
    this.router.navigate(['/reserve/details']);
  }

  public get IsEmpty(): boolean {
    return this.Selected != undefined;
  }
}

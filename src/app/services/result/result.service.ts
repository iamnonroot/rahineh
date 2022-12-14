import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  ILiveSearchPassenger,
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
  public Loading: boolean = true;
  public Results: any[] = [];

  private startTimer: number = 0;
  private endTimer: number = 0;

  constructor(private router: Router) {}

  public Select(item: IResultItineraryItem, passengers: ILiveSearchPassenger) {
    this.Selected = item;
    this.router.navigate(['/reserve/details'], {
      queryParams: { id: item.refrenceId, type: this.Type, ...passengers },
    });
  }

  public get IsEmpty(): boolean {
    return this.Selected == undefined;
  }

  public SetResults(value: any[]) {
    this.Results = value;
  }

  public get Timer(): string {
    return ((this.endTimer - this.startTimer) / 1000).toFixed(2) + ' ثانیه';
  }

  public StartTimer() {
    this.startTimer = Date.now();
  }

  public EndTimer() {
    this.endTimer = Date.now();
  }
}

import { EventEmitter, Injectable } from '@angular/core';
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
  public Step: number = 0; // Current step
  public Length: number = 0; // length of results or steps
  public Type!: TLiveSearchType; // Search type
  public Selected: IResultItineraryItem[] = []; // Selected Itineraries
  public WayType!: TLiveSearchWayType; // way type 'go' | 'go-back' | 'multi'

  public StepChange: EventEmitter<number> = new EventEmitter();

  constructor(private router: Router) {}

  public SetStep(step: number) {
    this.StepChange.emit(step);
  }

  public Select(item: IResultItineraryItem) {
    this.Selected[this.Step] = item;
    if (this.Step + 1 >= this.Length) {
      // redirect to /reserve page
      this.router.navigate(['/reserve/details']);
    } else {
      // change step for next result
      this.SetStep(this.Step + 1);
    }
  }

  public get IsEmpty(): boolean {
    return (
      this.Length == 0 ||
      this.Selected.length == 0 ||
      this.Selected.every((item) => item == undefined)
    );
  }
}

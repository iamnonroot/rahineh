import { OnDestroy, Pipe, PipeTransform } from "@angular/core";
import { EventCallbackResult } from "projects/eventer";
import { Observable, Observer } from "rxjs";
import { TikLiveService } from "../service/live.service";

@Pipe({
  name: "live",
})
export class LivePipe implements PipeTransform, OnDestroy {
  private event?: EventCallbackResult;
  constructor(private live: TikLiveService) {}

  ngOnDestroy(): void {
    this.event?.remove();
  }

  transform(key: string, arg?: string): any {
    return new Observable<any>((observer: Observer<any>) => {
      // get value for first time
      observer.next(this.format(this.live.GetValue(key), arg));
      // listen for ever
      this.event = this.live.Event.on(key, (value) =>
        observer.next(this.format(value, arg))
      ) as EventCallbackResult;
    });
  }

  private format(value: any, arg?: string): any {
    if (typeof value == "object" && arg) {
      return value[arg];
    } else {
      return value;
    }
  }
}

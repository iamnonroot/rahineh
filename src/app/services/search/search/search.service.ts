import { EventEmitter, Injectable } from '@angular/core';
import { TikLiveService } from 'projects/dynamic-component/src/public-api';
import { LIVE } from 'projects/enum';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public Event: EventEmitter<any> = new EventEmitter();

  constructor(private live: TikLiveService) {
    live.Event.on(LIVE.FILTER, (value) => {
      this.Event.emit(value);
    });
  }

  public Set<T = any>(key: string, value: T) {
    let self = this.Self();
    if (self[key] != value) {
      self[key] = value;
      this.live.SetValue(LIVE.FILTER, self);
    } else if ((value as any).length == 0) {
      delete self[key];
      this.live.SetValue(LIVE.FILTER, self);
    }
    this.Save();
  }

  public Get<T = any>(key: string): T {
    const self = { ...this.Self() };
    return self[key];
  }

  public Of<T = any>(key: string, value: T | undefined = undefined) {
    const self = this;
    value = self.Get<T>(key) ?? value;
    return {
      get value(): T | undefined {
        return this.current;
      },
      set value(data: T | undefined) {
        this.current = data;
        self.Set(key, data);
      },
      current: value,
    };
  }

  public Self() {
    return { ...this.live.GetValue(LIVE.FILTER) };
  }

  public Save() {
    window.localStorage.setItem(LIVE.FILTER, JSON.stringify(this.Self()));
  }

  public Load() {
    const data = window.localStorage.getItem(LIVE.FILTER);
    return data ? JSON.parse(data) : undefined;
  }
}

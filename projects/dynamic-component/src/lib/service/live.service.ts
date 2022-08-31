import { Injectable } from '@angular/core';
import { Eventer } from 'projects/eventer';
import { TikSDKSocketService } from 'projects/sdk/src/public-api';

@Injectable({
  providedIn: 'root',
})
export class TikLiveService {
  private map: LiveMap = {};

  public Event: Eventer<any> = new Eventer();

  constructor(socket: TikSDKSocketService) {
    socket.on('live', (event: LiveEvent) => {
      this.SetValue(event.key, event.value);
    });
  }

  public SetValue<T = any>(
    key: string,
    value: T,
    silent: boolean = false
  ): void {
    if (
      this.map[key] != value ||
      JSON.stringify(this.map[key]) == JSON.stringify(value)
    ) {
      this.map[key] = value;
      if (silent == false) this.Event.emit(key, value);
    }
  }

  public SetValueFromMap(map: any): void {
    for (let key of Object.keys(map)) {
      this.SetValue(key, map[key]);
    }
    this.Event.stackless();
  }

  public PushValue<T = any>(key: string, value: T): T | undefined {
    let array = this.GetValue(key);
    if (array && Array.isArray(array)) {
      array.push(value);
      this.SetValue(key, array);
    }
    return array;
  }

  public GetValue<T = any>(key: string): T | undefined {
    return this.map[key];
  }

  public RemoveValue(key: string): void {
    delete this.map[key];
    this.Event.remove(key);
  }

  public SpliceValue(key: string, index: number): void {
    let array = this.GetValue(key);
    if (array && Array.isArray(array)) {
      array.splice(index, 1);
      this.SetValue(key, array);
    }
  }

  public HasKey(key: string): boolean {
    return this.map[key] != undefined;
  }

  public Keys(): string[] {
    return Object.keys(this.map);
  }

  public Clear(): void {
    this.map = {};
    this.Event.clear();
  }
}

export interface LiveMap {
  [key: string]: any;
}

export interface LiveEvent {
  key: string;
  value: any;
}

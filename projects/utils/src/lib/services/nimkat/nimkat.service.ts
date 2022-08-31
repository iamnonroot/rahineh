import { Injectable } from "@angular/core";
import { TikSdkService } from "projects/sdk/src/public-api";
import { filter, map, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NimkatService {
  constructor(private sdk: TikSdkService) {}

  /**
   * Get data by its key from nimkat cloud storage
   * @param key key of data in nimkat cloud storage
   */
  public GetItem<T = any>(key: string): Observable<T | undefined> {
    return this.sdk.Nimkat.GetItem({ key }).pipe(
      filter((res) => res != undefined && res.status == true),
      map((res) => (res as any).value as string),
      map((data) => {
        if (data != "") {
          if (data.startsWith("[") || data.startsWith("{")) {
            // if data was an object
            return JSON.parse(data);
          } else if (data == "true" || data == "false") {
            // if data was boolean
            return data == "true";
          } else if (isNaN(parseInt(data)) == false) {
            // if data was number
            return Number(data);
          }
          // else data was nothing
          return data;
        }
        return undefined;
      })
    );
  }

  /**
   * Set data by its key in nimkat cloud storage
   * @param key key of data in nimkat cloud storage
   * @param value data in nimkat cloud storage
   */
  public SetItem<T = any>(key: string, value: T) {
    let data = "";
    switch (typeof value) {
      case "object":
        data = JSON.stringify(value);
        break;
      case "boolean":
      case "number":
        data = value.toString();
        break;

      default:
        data = value as any;
        break;
    }
    return this.sdk.Nimkat.SetItem({ key, value: data });
  }

  /**
   * Push a data item to array of data
   * @param key key of data in nimkat cloud storage
   * @param value new data to push in array
   */
  public PushItem<T = any>(key: string, value: T) {
    this.GetItem<T[]>(key).pipe(
      map((array) => {
        if (array && Array.isArray(array)) {
          array.push(value);
          this.SetItem<T[]>(key, array);
        }
        return array ?? [];
      })
    );
  }

  /**
   * Remove data by its key from nimkat cloud storage
   * @param key key of data in nimkat cloud storage
   */
  public RemoveItem(key: string) {
    return this.sdk.Nimkat.RemoveItem({ key });
  }

  /**
   * Splice data array
   * @param key key of data in nimkat cloud storage
   * @param index index of data in array
   */
  public SpliceItem<T = any>(key: string, index: number) {
    this.GetItem<T[]>(key).pipe(
      map((array) => {
        if (array && Array.isArray(array)) {
          array.splice(index, 1);
          this.SetItem<T[]>(key, array);
        }
        return array ?? [];
      })
    );
  }

  /**
   * Get a list of keys in nimkat cloud storage
   * @returns a list of keys in nimkat cloud storage
   */
  public Keys(): Observable<string[]> {
    return this.sdk.Nimkat.Keys().pipe(map((res) => (res as any).keys));
  }

  /**
   * Check key of data is in nimkat cloud storage
   * @param key key of data in nimkat cloud storage
   * @returns boolean status
   */
  public HasKey(key: string): Observable<boolean> {
    return this.GetItem(key).pipe(map((item) => item != undefined));
  }
}

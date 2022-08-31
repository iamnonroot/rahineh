import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DynamicComponentFactoryService {
  public component: ComponentItem[] = [];

  constructor() {}
}

export interface ComponentItem {
  name: string;
  component: any;
}

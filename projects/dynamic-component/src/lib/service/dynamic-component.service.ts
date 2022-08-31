import { Injectable } from '@angular/core';
import { IDynamicComponentItem } from '../interface';
import { DynamicComponentFactoryService } from './dynamic-component-factory.service';

@Injectable({
  providedIn: 'root',
})
export class TikDynamicComponentService {
  private component: TikDCComponentMap = {};

  private callback: TikDCCallbackMap = {};

  private layout: TikDCComponentLayout = {};

  constructor(factory: DynamicComponentFactoryService) {
    // load components from factory
    for (let item of factory.component) {
      this.AddComponent(item.name, item.component);
    }
  }

  /**
   * Add component to map of components
   * @param name component name
   * @param component angular component class
   */
  public AddComponent(name: string, component: any) {
    this.component[name] = component;
  }

  /**
   * Get component by its name from map
   * @param name component name
   * @return angular component class
   */
  public GetComponent(name: string): any | undefined {
    return this.component[name];
  }

  /**
   * Set component layout item by a key
   * @param key component layout item key
   * @param list component list item
   */
  public SetComponentLayout(key: string, list: IDynamicComponentItem[]) {
    this.layout[key] = list;
  }

  /**
   * Get component list item by its key
   * @param key component layout item key
   * @returns dynamic component list item
   */
  public GetComponentLayout(key: string): IDynamicComponentItem[] | undefined {
    return this.layout[key];
  }

  /**
   * Delete component list item from map by its key
   * @param key component layout item key
   */
  public RemoveComponentLayout(key: string): void {
    delete this.layout[key];
  }

  /**
   * Set callback function by its key
   * @param key callback key
   * @param callback callback function
   */
  public SetCallback(key: string, callback: any): void {
    this.callback[key] = callback;
  }

  /**
   * Get callback function by its key
   * @param key callback key
   * @returns callback function or undefined
   */
  public GetCallback(key: string): any | undefined {
    return this.callback[key];
  }

  /**
   * Delete callback function from map by its key
   * @param key callback key
   */
  public RemoveCallback(key: string): void {
    delete this.callback[key];
  }

  /**
   * Call callback function by passing args when exists in map
   * @param key callback key
   * @param args callback function args
   */
  public CallCallback(key: string, ...args: any[]): void {
    const callback = this.GetCallback(key);

    if (callback) callback(...(args ?? []));
    else {
      // say that callback not exists
      console.error(
        `[Tik Dynamic Component] Callback with name "${key}" does not exist!`
      );
    }
  }
}

export interface TikDCComponentMap {
  [key: string]: any;
}

export interface TikDCCallbackMap {
  [key: string]: any;
}

export interface TikDCComponentLayout {
  [key: string]: IDynamicComponentItem[];
}

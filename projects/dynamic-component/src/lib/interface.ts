import { ComponentRef } from '@angular/core';

export interface IDynamicComponentItem<T = any> {
  actor: string;
  type: 'component' | 'element';
  tag: string; // component name or element tag
  children?: IDynamicComponentItem[];
  class?: string; // html attr style class
  attr?: IDynamicComponentAttr; // html attr array
  event?: IDynamicComponentEvent; // events
  data?: {
    type: TDynamicComponentDataType;
    value: T;
  };
}

export interface IDynamicComponentAttr {
  [key: string]: any;
}

export interface IDynamicComponentEvent {
  [event: string]: {
    callback: string;
    args?: any[];
  };
}

export type TDynamicComponentDataType = 'text' | 'live' | 'static';

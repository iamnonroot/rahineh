export class Eventer<T> {
  private callback: Callback = {};
  private stack: Stack = {};
  private listener?: ListenerFunction;

  /**
   * Check event exist or not
   * @param name event name
   * @returns boolean event exist or not
   */
  public has(name: T): boolean {
    return name in this.callback;
  }

  /**
   * Check event stacked or not
   * @param name event name
   * @returns boolean event is stacked or not
   */
  public isStacked(name: T): boolean {
    return name in this.stack;
  }

  /**
   * Listen to an event
   * @param name event name
   * @param callback event callback
   * @returns id of callback
   */
  public on(
    name: T | T[],
    callback: CallbackFunction
  ): EventCallbackResult | EventCallbackResult[] {
    if (Array.isArray(name))
      return name.map((value) => this._add(value as any, callback, false));
    else return this._add(name as any, callback, false);
  }

  /**
   * Listen once to an event
   * @param name event name
   * @param callback event callback
   * @returns id of callback
   */
  public once(
    name: T | T[],
    callback: CallbackFunction
  ): EventCallbackResult | EventCallbackResult[] {
    if (Array.isArray(name))
      return name.map((value) => this._add(value as any, callback, true));
    else return this._add(name as any, callback, false);
  }

  /**
   * Remove an event
   * @param name event name
   */
  public remove(name: T): void {
    delete this.callback[name as any];
  }

  /**
   * Clear and remove all event
   */
  public clear(): void {
    this.callback = {};
    this.stack = {};
    this.listener = undefined;
  }

  /**
   * Emit to an event
   * @param name event name
   * @param params some optinal params
   */
  public emit(name: T, ...params: any[]): void {
    if (this.listener) {
      this.listener({ name: name as any, params: params });
    }
    if (name in this.callback) {
      this.callback[name as any].forEach(
        (item: CallbackItem, index: number) => {
          item.function(...params);
          if (item.once) this._remove(name as any, index);
        }
      );
    } else {
      this.stack[name as any] = params;
    }
  }

  /**
   * Listen to all events
   * @param callback listenner function callback
   */
  public listen(callback: ListenerFunction): void {
    this.listener = callback;
  }

  /**
   * Clear all stacked events
   */
  public stackless(): void {
    this.stack = {};
  }

  private _add(
    name: string,
    callback: CallbackFunction,
    once: boolean
  ): EventCallbackResult {
    if (name in this.callback == false) this.callback[name] = [];

    this.callback[name].push({
      once: once,
      function: callback,
    });

    let stack = this._getStackDataParams(name);

    if (stack != undefined) this.emit(name as any, ...stack);

    return {
      remove: () =>
        this._remove(
          name,
          this.callback[name] ? this.callback[name].length - 1 : -1
        ),
    };
  }

  private _remove(name: string, index: number): void {
    if (this.callback[name]) {
      this.callback[name].splice(index, 1);
      if (this.callback[name].length == 0) delete this.callback[name];
    }
  }

  /**
   * Get stored event
   * @param name event name
   */
  private _getStackDataParams(name: string): any[] | undefined {
    let params = this.stack[name];

    // defer delete stack
    setTimeout(() => {
      if (name in this.stack) delete this.stack[name];
    }, 0);

    return params;
  }
}

interface Event {
  name: string;
  params: any[];
}

interface Stack {
  // event name and events params value
  [name: string]: any[];
}

interface Callback {
  [name: string]: CallbackItem[];
}

interface CallbackItem {
  once: boolean;
  function: CallbackFunction;
}

export interface CallbackFunction {
  (...params: any[]): void;
}

export interface ListenerFunction {
  (event: Event): void;
}

export interface EventCallbackResult {
  remove: () => void;
}

import { Location } from '@angular/common';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  InjectFlags,
  InjectionToken,
  Injector,
  Type,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TikDialogService {
  private dialogComponentRefMap: { [key: string]: ComponentRef<any> } = {};
  private state: string[] = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private location: Location
  ) {
    window.addEventListener('popstate', (event) => {
      if (this.state[this.state.length - 1]) {
        this.close(this.state[this.state.length - 1]);
      }

      if (
        history.state &&
        history.state.key &&
        history.state.key == 'tik-dialog' &&
        this.state.length == 0
      ) {
        this.location.back();
      }
    });
  }

  public open<R = any, D = any>(
    component: any,
    option: DialogRefOption<D> = {}
  ) {
    return new Promise<R>((resolve) => {
      try {
        const id = Math.floor(Math.random() * 1000).toString();
        const map = new WeakMap();
        map.set(DialogRef, {
          data: option.data,
          close: (value: R) => {
            this.kill(id);
            this.location.back();
            resolve(value);
          },
        });
        const componentFactory =
          this.componentFactoryResolver.resolveComponentFactory(component);
        const componentRef = componentFactory.create(
          new DialogInjector(this.injector, map)
        );
        this.appRef.attachView(componentRef.hostView);
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
          .rootNodes[0] as HTMLElement;
        if (option.class)
          (<HTMLDivElement>domElem.firstChild)!.classList.add(
            ...option.class.split(' ')
          );
        const container = document.createElement('div');
        container.className = 'tik-dialog-container z-20';
        if (option.bottom) container.classList.add('tik-dialog-bottom');
        const overlay = document.createElement('div');
        overlay.className = 'tik-dialog-overlay';
        overlay.onclick = () => {
          this.kill(id);
          this.location.back();
        };
        container.appendChild(overlay);
        container.appendChild(domElem);
        document.body.appendChild(container);
        this.location.go(window.location.pathname, '', { key: 'tik-dialog' });
        this.dialogComponentRefMap[id] = componentRef;
        this.state.push(id);
        setTimeout(() => {
          container.classList.add('tik-dialog-open');
        }, 0);
      } catch (error) {
        console.error(error);
      }
    });
  }

  public remove() {
    for (let key of Object.keys(this.dialogComponentRefMap)) this.close(key);
  }

  private close(id: string) {
    if (this.dialogComponentRefMap[id]) {
      this.kill(id);
      this.state.pop();
      delete this.dialogComponentRefMap[id];
    }
  }

  private kill(id: string) {
    if (this.dialogComponentRefMap[id]) {
      const ref = this.dialogComponentRefMap[id];
      const elem = ref.location.nativeElement as HTMLElement;
      if (elem.parentElement) {
        elem.parentElement.classList.remove('tik-dialog-open');
        setTimeout(() => {
          if(elem.parentElement) document.body.removeChild(elem.parentElement!);
          ref.destroy();
        }, 100);
      }
    }
  }
}

class DialogInjector implements Injector {
  constructor(
    private _parentInjector: Injector,
    private _additionalTokens: WeakMap<any, any>
  ) {}

  get<T>(
    token: Type<T> | InjectionToken<T>,
    notFoundValue?: T,
    flags?: InjectFlags
  ): T;
  get(token: any, notFoundValue?: any, flags?: any) {
    const value = this._additionalTokens.get(token);

    if (value) return value;

    return this._parentInjector.get<any>(token, notFoundValue);
  }
}

export class DialogRef<R = any, D = any> {
  data?: D;
  close?: (value?: R) => void;
}

interface DialogRefOption<D = any> {
  data?: D;
  bottom?: boolean;
  class?: string;
}

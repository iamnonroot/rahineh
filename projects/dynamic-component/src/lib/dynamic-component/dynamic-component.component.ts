import {
  AfterViewInit,
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  EventEmitter,
  Injector,
  Input,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { EventCallbackResult } from 'projects/eventer';
import { TikSdkService } from 'projects/sdk/src/public-api';
import { IDynamicComponentItem } from '../interface';
import {
  TikDCCallbackMap,
  TikDCComponentMap,
  TikDynamicComponentService,
} from '../service/dynamic-component.service';
import { TikLiveService } from '../service/live.service';

export const INJECT_INPUT_NAME: string = 'injected';

@Component({
  selector: 'tik-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css'],
})
export class DynamicComponentComponent implements AfterViewInit {
  // Inputs
  @Input() key?: string;
  @Input() data?: any; // custom data
  @Input() layouts?: IDynamicComponentItem[];
  @Input() components?: TikDCComponentMap;
  @Input() callbacks?: TikDCCallbackMap;
  @Input() preload: boolean = true;
  // Outputs
  @Output() done: EventEmitter<void> = new EventEmitter(); // on rendered
  @Output() load: EventEmitter<IDynamicComponentItem[]> = new EventEmitter(); // on list fetched

  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef | undefined;

  public Ref: TikDCRef = new TikDCRef();

  constructor(
    private dc: TikDynamicComponentService,
    private live: TikLiveService,
    private sdk: TikSdkService,
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef
  ) {}

  async ngAfterViewInit() {
    if (this.preload == false) return;
    this.make();
  }

  public async make() {
    try {
      
      (<HTMLDivElement>this.vc!.element.nativeElement).innerHTML = '';
      // get all components
      const items = await this.fetchComponents();
      // emit loaded list
      this.load.emit(items);
      // make component for each
      for (let item of items) {
        const elem = this.makeItem(item);
        if (elem)
          (<HTMLDivElement>this.vc?.element.nativeElement).appendChild(elem!);
      }
      // emit that made done
      this.done.emit();
    } catch (error) {
      console.error(error);
      //
    }
  }

  /**
   * This function fetch components data from Api in SDK
   */
  private fetchComponentsFromSDK() {
    return new Promise<IDynamicComponentItem[]>((resolve, reject) => {
      let self = this.sdk.Dynamic.DynamicComponent({
        key: this.key!,
        data: this.data,
      });

      self.subscribe({
        next: (res) => {
          if (res && res.status) {
            resolve((res as any).components);
          } else if (res != undefined) {
            reject(res);
          }
        },
        error: (err) => reject(err),
      });
    });
  }

  /**
   * This function fetch components data from a list with key
   */
  private async fetchComponents(): Promise<IDynamicComponentItem<any>[]> {
    try {
      // return components data from @Input
      if (this.layouts) return this.layouts;
      // return components data from key in local map
      const data = this.dc.GetComponentLayout(this.key!);
      if (data) return data;
      // return components data from server
      return await this.fetchComponentsFromSDK();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  private makeItem(item: IDynamicComponentItem): HTMLElement | undefined {
    switch (item.type) {
      case 'element':
        return this.makeElement(item);
      case 'component':
        return this.makeComponent(item);
      default:
        return undefined;
    }
  }

  /**
   * This function make a HTML element
   */
  private makeElement(item: IDynamicComponentItem) {
    const element = document.createElement(item.tag);
    if (item.class) {
      element.className = item.class;
    }
    if (item.attr) {
      for (let key of Object.keys(item.attr)) {
        element.setAttribute(key, item.attr[key]);
      }
    }
    if (item.children) {
      for (let child of item.children) {
        const elem = this.makeItem(child);
        if (elem != undefined) element.appendChild(elem);
      }
    }
    if (item.data) {
      switch (item.data.type) {
        case 'text':
          element.textContent = item.data.value;
          break;

        default:
          break;
      }
    }
    if (item.event) {
      for (let key of Object.keys(item.event)) {
        element.addEventListener(key, (e) => {
          let event = item.event![key];
          if (event.args && event.args?.includes('$event')) {
            event.args[event.args.indexOf('$event')] = e;
          }
          if (this.callbacks && this.callbacks[event.callback]) {
            this.callbacks[event.callback](...(event.args ?? []));
          } else {
            this.dc.CallCallback(event.callback, event.args ?? []);
          }
        });
      }
    }
    return element;
  }

  /**
   * This function make a component
   * 1- Get component name from data
   * 2- Check component in dc service
   * 3- Make that component
   * 4- Set that component data
   * 5- Set style class attr
   * 6- Set tag attr
   */
  private makeComponent(item: IDynamicComponentItem): HTMLElement | undefined {
    try {
      // step/1
      const componentName = item.tag;
      // step/2
      const componentClass =
        this.components && this.components[componentName] // component from @Input
          ? this.components[componentName]
          : this.dc.GetComponent(componentName); // component from local map
      if (componentClass != undefined) {
        // step/3 & step/4
        const componentFactory =
          this.componentFactoryResolver.resolveComponentFactory(componentClass);
        const ref = componentFactory.create(this.injector);
        if (item.data) {
          switch (item.data.type) {
            case 'static':
              ref.setInput(INJECT_INPUT_NAME, item.data.value);
              break;
            case 'live':
              // load from live storage
              ref.setInput(
                INJECT_INPUT_NAME,
                this.live.GetValue(item.data.value)
              );
              // listen to storage
              const event = this.live.Event.on(item.data.value, (value) => {
                ref.setInput(INJECT_INPUT_NAME, value);
              }) as EventCallbackResult;
              // remove event on component destroied
              ref.hostView.onDestroy(() => {
                event.remove();
              });
              ref.onDestroy(() => {
                event.remove();
              });
              break;

            default:
              break;
          }
        }
        this.appRef.attachView(ref.hostView);
        const element = (ref.hostView as EmbeddedViewRef<any>)
          .rootNodes[0] as HTMLElement;
        // step/5
        if (item.class) {
          element.classList.add(...item.class.split(' '));
        }
        // step/6
        if (item.attr) {
          for (let key of Object.keys(item.attr)) {
            element.setAttribute(key, item.attr[key]);
          }
        }

        // adding to ref
        this.Ref.set(item.actor, ref);

        return element;
      } else {
        // say that component not exists
        console.error(
          `[Tik Dynamic Component] Component with name "${componentName}" does not exist!`
        );
        return undefined;
      }
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
}

interface TikDCRefMap {
  [actor: string]: ComponentRef<any>;
}

export class TikDCRef {
  private map: TikDCRefMap = {};

  constructor() {}

  public set(actor: string, ref: ComponentRef<any>) {
    this.map[actor] = ref;
  }

  public get(actor: string): ComponentRef<any> | undefined {
    return this.map[actor];
  }
}

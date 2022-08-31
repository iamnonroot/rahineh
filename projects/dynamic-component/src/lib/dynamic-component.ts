import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// services
import { TikDynamicComponentService } from './service/dynamic-component.service';
import {
  ComponentItem,
  DynamicComponentFactoryService,
} from './service/dynamic-component-factory.service';
// modules
import { DynamicComponentModule } from './dynamic-component.module';
// mini components
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [ContentComponent],
  imports: [DynamicComponentModule, CommonModule, RouterModule],
  providers: [TikDynamicComponentService, DynamicComponentFactoryService],
})
export class TikDynamicComponentModule {
  static forRoot(
    params: ForRootParams
  ): ModuleWithProviders<DynamicComponentModule> {
    return {
      ngModule: DynamicComponentModule,
      providers: [
        {
          provide: DynamicComponentFactoryService,
          useValue: {
            component: params.components.concat([
              {
                name: 'content',
                component: ContentComponent,
              },
            ]),
          },
        },
      ],
    };
  }
}

interface ForRootParams {
  components: ComponentItem[];
}

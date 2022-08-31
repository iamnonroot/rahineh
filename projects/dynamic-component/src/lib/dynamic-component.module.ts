import { NgModule } from "@angular/core";
// main component
import { DynamicComponentComponent } from "./dynamic-component/dynamic-component.component";
// pipe
import { LivePipe } from "./pipe/live.pipe";

@NgModule({
  declarations: [
    DynamicComponentComponent,
    LivePipe,
  ],
  exports: [DynamicComponentComponent, LivePipe],
})
export class DynamicComponentModule {}

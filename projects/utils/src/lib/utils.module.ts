import { NgModule } from '@angular/core';
import { FormatPipe } from './pipe/format/format.pipe';
import { SafePipe } from './pipe/safe/safe.pipe';
import { DialogRef } from './services/dialog/dialog.service';
import { DiscountPipe } from './pipe/discount/discount.pipe';

@NgModule({
  declarations: [FormatPipe, SafePipe, DiscountPipe],
  imports: [],
  exports: [FormatPipe, SafePipe, DiscountPipe],
  providers: [DialogRef],
})
export class TikUtilsModule {}

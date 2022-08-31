import { Pipe, PipeTransform } from '@angular/core';
import { TikFunctionsService } from '../../services/functions/functions.service';

@Pipe({
  name: 'format',
})
export class FormatPipe implements PipeTransform {
  constructor(private functions: TikFunctionsService) {}

  transform(value: any, type: string, ...args: any[]): string {
    switch (type) {
      case 'bytes':
        return this.functions.FormatBytes(value);
      case 'price':
        return this.functions.FormatPrice(value);
      case 'ago':
        return this.functions.FormatTimeAgo(value);
      case 'time':
        return this.functions.FormatTimer(value);
      case 'date':
        return this.functions.FormatJalali(value, args[0] ?? 'jYYYY/jMM/jDD');
      default:
        return '';
    }
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(data: any[], value: any, at?: string): any[] {
    let result: any[] = [];
    if (at) {
      result = data.filter((item) =>
        (item[at] as any[]).every((item) =>
          Object.values(item).find((item: any) => item.startsWith(value))
        )
      );
    } else {
      result = data.filter((item) =>
        Object.values(item).find((item: any) => item.startsWith(value))
      );
    }
    return result;
  }
}

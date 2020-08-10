import { Pipe, PipeTransform } from '@angular/core';
import { bingoTableModel } from './model';

@Pipe({
  name: 'filterRow'
})
export class FilterRowPipe implements PipeTransform {

  transform(data: bingoTableModel[] = [], ...args: unknown[]): bingoTableModel[] {
    var x = data != undefined ? data.filter(r => r.row ==args[0]) : [];
    return x;
  }
}

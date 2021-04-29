import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertCoin'
})
export class ConvertCoinPipe implements PipeTransform {

  transform(value: number, prefix: string = '$'): unknown {
    return prefix + ' ' + (value * 5);
  }

}

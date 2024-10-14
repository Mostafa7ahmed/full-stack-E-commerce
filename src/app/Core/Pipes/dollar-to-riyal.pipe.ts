import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollarToRiyal',
  standalone: true
})
export class DollarToRiyalPipe implements PipeTransform {

  transform(value: number): string {
    const exchangeRate = 2.0;
    const convertedValue = value * exchangeRate;
    return `${convertedValue.toFixed(2)} رس`;
  }
}

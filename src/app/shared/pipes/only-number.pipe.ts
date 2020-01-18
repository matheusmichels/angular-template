import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onlyNumber'
})
export class OnlyNumberPipe implements PipeTransform {
  transform(text: string): number {
    return Number(text.replace(/\D/g, ''));
  }
}

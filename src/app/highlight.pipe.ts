import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  transform(value: any, pass: any): any {
    if (!pass) {
      return value;
    }
  let aux = ['Triez','Ou','AJoutez'];

    for(let args of aux){

      const regex = new RegExp(args, 'gi');
      const match = value.match(regex);

      if (!match) {
        return value;
      }

      value = value.replace(regex, `<span class="p-text-bold">${match[0]}</span>`);
    }
    return value;
  }
}

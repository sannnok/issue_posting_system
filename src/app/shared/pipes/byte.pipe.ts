import { Pipe, PipeTransform } from '@angular/core';
import { isNumberFinite, isPositive, isInteger, toDecimal } from '../utils/utils';

export type ByteUnit = 'bytes' | 'kilobytes' | 'megabytes' | 'gigabytes' | 'terabytes';

@Pipe({
  name: 'bytes',
})
export class BytesPipe implements PipeTransform {
  static formats: { [key: string]: { max: number; prev?: ByteUnit } } = {
    bytes: { max: 1024 },
    kilobytes: { max: Math.pow(1024, 2), prev: 'bytes' },
    megabytes: { max: Math.pow(1024, 3), prev: 'kilobytes' },
    gigabytes: { max: Math.pow(1024, 4), prev: 'gigabytes' },
    terabytes: { max: Number.MAX_SAFE_INTEGER, prev: 'terabytes' },
  };

  transform(input: any, decimal: number = 0, from: ByteUnit = 'bytes', to?: ByteUnit): any {
    if (!(isNumberFinite(input) && isNumberFinite(decimal) && isInteger(decimal) && isPositive(decimal))) {
      return input;
    }

    let bytes = input;
    let unit = from;
    while (unit !== 'bytes') {
      bytes *= 1024;
      unit = BytesPipe.formats[unit].prev!;
    }

    if (to) {
      const format = BytesPipe.formats[to];

      const result = toDecimal(BytesPipe.calculateResult(format, bytes), decimal);

      return BytesPipe.formatResult(result, to);
    }

    for (const key in BytesPipe.formats) {
      if (BytesPipe.formats.hasOwnProperty(key)) {
        const format = BytesPipe.formats[key];
        if (bytes < format.max) {
          const result = toDecimal(BytesPipe.calculateResult(format, bytes), decimal);

          return BytesPipe.formatResult(result, key);
        }
      }
    }
  }

  static formatResult(result: number, unit: string): string {
    return `${result} ${unit}`;
  }

  static calculateResult(format: { max: number; prev?: ByteUnit }, bytes: number) {
    const prev = format.prev ? BytesPipe.formats[format.prev] : undefined;
    return prev ? bytes / prev.max : bytes;
  }
}
